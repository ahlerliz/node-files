"use strict";
// module.exports = {
//     cat: cat
//   };

const fsP = require("fs/promises");

const argv = process.argv;

async function cat(path) {
  try {
    let contents = await fsP.readFile(path, "utf8");
    console.log("file contents:", contents);
  } catch (err) {
    console.log(`Error: ENOENT: no such file or directory, open ${argv[2]}`)
    process.exit(1);
  }
}
// end
//console.log(process.argv);
cat(argv[2]);
//cat(argv[1]);



// process.argv