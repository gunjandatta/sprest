"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// TO DO:
// 1) Merge mapper files into mapper.ts file
// 2) Reference the main mapper.ts during the merge, so the reference is still there
// 3) Update the method adder helper function to reference the mapper using the raw metadata type, use old code as a backup
// 4) Test if mapper files is still needed (Lots of testing here...), but references will ensure library won't break
// 5) Remove the mapper files and code used as a backup
var Mapper_Old = require("./old");
exports.Mapper_Old = Mapper_Old;
var def_1 = require("./def");
exports.Mapper = def_1.Mapper;
var SPTypes = require("./sptypes");
exports.SPTypes = SPTypes;
