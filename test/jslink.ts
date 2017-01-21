import {JSLink} from "../src/lib";

function hideField() {

}

var jsLink = new JSLink();
jsLink.Templates = {
    Fields: [
        {
            DisplayForm: hideField,
            Name: "Title"            
        }
    ]
};

console.log(jsLink.getTemplate());