"use strict";

//Step 1------------------------------

const fsP = require("fs/promises");

const argv = process.argv; //Note: store process.arv[2]

async function cat(path) {
    let contents;
    try {
        contents = await fsP.readFile(path, "utf8");
    } catch (err) {
        console.log(`Error: ENOENT: no such file or directory, open ${argv[2]}`)
        process.exit(1);
    }
    console.log("file contents:", contents);
}
// end

// cat(argv[2]);

//Step 2------------------------------

const axios = require("axios");

/**Takes in url. Makes axios get request. Consoles log first 80 character of response text if status 200. */
async function webCat(url){
    let resp;
    try {
        resp = await axios.get(url);
        // let contents = await fsP.readFile(path, "utf8");
        // console.log("file contents:", contents);
    } catch (err) {
        console.log(
            `Error fetching URL: ${argv[2]}`,
            "Error Message: ", err.message
            );
            process.exit(1);
        }
    console.log(resp.data.slice(0, 80), "...");


}

/**main: Takes in arguments. 
 * Based on argument calls cat or webCat function. */

function main(arg){
    if(arg === "one.txt"){ //Note: should run on any file
        cat(arg);
    } else {
        webCat(arg);
    }
}

main(argv[2]);