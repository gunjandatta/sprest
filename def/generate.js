let fs = require("fs");
let parser = require("xml2js").parseString;
let rmDir = require("rimraf");

let create = {
    interface: function (name, variables) {
        return [
            '/*********************************************',
            '* ' + name,
            '**********************************************/',
            'export interface ' + name + ' {',
            variables,
            '}',
            ''
        ].join('\n');
    }
};

// Recursively create the directories and index files from the namespace
function createDirectories(namespace) {
    let path = "lib";

    // See if we need to create directories
    if (namespace.indexOf('.') > 0) {
        // Get the sub directories
        namespace.split('.').forEach(function (dirName) {
            // Update the path
            path += "/" + dirName

            // See if the directory doesn't exists
            if (!fs.existsSync(path)) {
                // Create the directory
                fs.mkdir(path);
            }
        });
    } else {
        // Update the path
        path += "/" + namespace

        // See if the directory doesn't exist
        if (!fs.existsSync(path)) {
            // Create the directory
            fs.mkdir(path);
        }
    }

    // Return the path
    return path;
};

// Recursively read and generate index files
function generateIndexFiles(path) {
    let content = [];
    let filePath = path + "/index.d.ts";

    // See if an index file exists
    if (fs.existsSync(filePath)) { return; }

    // Read the directory
    fs.readdirSync(path).forEach(obj => {
        // Skip files
        if (/\.d\.ts$/.test(obj)) { return; }

        // Append the content
        content.push('import * as ' + obj + ' from "./' + obj + '";');
        content.push('export { ' + obj + ' }');

        // Generate the index files for this directory
        generateIndexFiles(path + "/" + obj);
    });

    // See if content exist
    if (content) {
        // Create the file
        let stream = fs.createWriteStream(filePath);

        // Write the export
        stream.write(content.join('\n'));

        // Close the file
        stream.close();
    }
};

// Read the file
fs.readFile("metadata.xml", "utf8", (err, xml) => {
    let counter = 0;
    if (err) throw err;

    // Parse the xml
    parser(xml, function (err, xml) {
        let directories = {};
        let mapper = {};

        // Parse the schemas
        let schemas = xml["edmx:Edmx"]["edmx:DataServices"][0].Schema;
        for (let i = 0; i < schemas.length; i++) {
            let schema = schemas[i];

            // Ensure a namespace name exists
            let ns = schema.$ ? schema.$.Namespace : null;
            if (ns) {
                // Set the directory name
                directories[ns] = directories[ns] || {};

                // Set the root namespace
                let root = ns.split('.')[0];

                // Update the mapper
                mapper[ns] = 'import { ' + root + ' } from "/projects/sprest/def/lib";';
            } else { continue; }

            // Parse the schema
            for (let key in schema) {
                let value = schema[key];

                // Skip the attributes
                if (key == "$") { continue; }

                // See if this is a collection
                if (value.length > 0) {
                    let collection = key + "s";

                    // Parse the collection
                    for (let j = 0; j < value.length; j++) {
                        let interface = value[j];

                        // Add the collection
                        directories[ns][collection] = directories[ns][collection] || {};

                        // Validate the collection
                        let name = interface.$ ? interface.$.Name : null;
                        let properties = interface.Property;
                        if (name && properties && properties.length > 0) {
                            // Add the interface
                            directories[ns][collection][name] = directories[ns][collection][name] || {};

                            // Parse the properties
                            for (let k = 0; k < properties.length; k++) {
                                let property = properties[k];

                                // Ensure a name exists
                                let propName = property.$ ? property.$.Name : null;
                                if (propName) {
                                    // Create the property
                                    directories[ns][collection][name][propName] = {};
                                } else { continue; }

                                // Parse the attributes
                                for (let prop in property.$) {
                                    // Skip the name field
                                    if (prop == "Name") { continue; }

                                    // Add the property
                                    directories[ns][collection][name][prop] = property.$[prop];
                                }
                            }
                        } else { continue; }
                    }
                }
            }
        }

        // See if the lib directory exists
        if (fs.existsSync("lib")) {
            // Delete the lib directory
            rmDir.sync("lib")
        }

        // Create the directory
        fs.mkdir("lib");

        // Parse the directories
        for (let dirName in directories) {
            // Create the directories
            createDirectories(dirName);
        }

        // Generate the index files
        generateIndexFiles("lib");

        // Parse the directories
        // NameSpace -> Collection -> Interface -> Properties
        // Directory -> File
        for (let dirName in directories) {
            let files = {};
            let filesIndex = [];

            // Set the path
            let path = "lib/" + dirName.replace(/\./g, '/');

            // Parse the filenames
            for (let filename in directories[dirName]) {
                let content = [];
                let fileImports = [];

                // Parse the interfaces
                for (let name in directories[dirName][filename]) {
                    let interface = directories[dirName][filename][name];
                    let variables = [];

                    // Ensure a type exists
                    let type = interface.Type;
                    if (type) {
                        // Update the type
                        type = type
                            .replace(/Edm\.Boolean/, 'boolean')
                            .replace(/Edm\.Binary/, 'any')
                            .replace(/Edm\.DateTime/, 'any')
                            .replace(/Edm\.Double/, 'number')
                            .replace(/Edm\.Guid/, 'any')
                            .replace(/Edm\.Int16/, 'number')
                            .replace(/Edm\.Int32/, 'number')
                            .replace(/Edm\.Int64/, 'number')
                            .replace(/Edm\.String/, 'string')
                            .replace(/^Collection\(/, 'Array<')
                            .replace(/\)$/, '>');

                        // See if the type requires an import
                        if (type.indexOf('.') > 0) {
                            // Get the last index of it
                            let refType = type.replace(/^Array\<|\>$/g, '');
                            refType = refType.substr(0, refType.lastIndexOf('.'));

                            // Ensure the ref type exists
                            if (mapper[refType]) {
                                // Add the import
                                fileImports.push(mapper[refType]);
                            }
                        }

                        // Parse the properties
                        for (let propName in interface) {
                            // Add the variable
                            variables.push('\t' + propName + ': ' + type + ';');

                            switch (propName) {
                                // Nullable
                                case "Nullable":
                                    break;
                            }
                        }
                    }

                    // Ensure variables exist
                    if (variables.length > 0) {
                        // Add the content
                        content.push(create.interface(name, variables.join('\n')));
                    }
                }

                // Ensure content exists
                if (content.length > 0) {
                    // Update the index
                    filesIndex.push('export * from "./' + filename.toLowerCase() + '";');

                    // Remove duplicates from the import array
                    fileImports = fileImports.filter(function (item, pos) { return fileImports.indexOf(item) == pos; });

                    // Add the file
                    files[filename.toLowerCase()] = [
                        fileImports.join('\n'),
                        '',
                        content.join('\n'),
                    ].join('\n');
                }
            }

            // Parse the files to create
            for (let file in files) {
                // Create the file
                let stream = fs.createWriteStream(path + "/" + file + ".d.ts");

                // Write the content
                stream.write(files[file]);

                // Close the file
                stream.close();
            }

            // Create the index file
            let stream = fs.createWriteStream(path + "/index.d.ts");

            // Write the content
            stream.write(filesIndex.join('\n'));

            // Close the file
            stream.close();
        }

        // Log
        console.log("Library generated in './lib'");
    });
});