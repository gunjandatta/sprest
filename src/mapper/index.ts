// TO DO:
// 1) Merge mapper files into mapper.ts file
// 2) Reference the main mapper.ts during the merge, so the reference is still there
// 3) Update the method adder helper function to reference the mapper using the raw metadata type, use old code as a backup
// 4) Test if mapper files is still needed (Lots of testing here...), but references will ensure library won't break
// 5) Remove the mapper files and code used as a backup
import * as Mapper_Old from "./old";
import { Mapper } from "./def";
export { Mapper, Mapper_Old }