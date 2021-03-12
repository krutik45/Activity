
let fs = require("fs");
let path = require("path");
let input = process.argv.slice(2);

function isFileorNOt(dirpath) {
    return fs.lstatSync(dirpath).isFile();
}
function listContent(dirpath) {
    return fs.readdirSync(dirpath);
}

function Display(dirpath){
    let isFile = isFileorNOt(dirpath);
    if (isFile == true) {
        let fcontent = fs.readFileSync(dirpath);
        console.log(""+fcontent);
    } else {
       
        let content = listContent(dirpath);
        for (let i = 0; i < content.length; i++) {
            
            let childPath = path.join(dirpath, content[i]);

            Display(childPath);
        }
    }
}

function dispMultipleFileContent(input){
  for(let i = 0; i < input.length; i++){
    let isFile = isFileorNOt(input[i]);
    if (isFile == true) {
        let fcontent = fs.readFileSync(input[i]);
        console.log(""+fcontent);
    } else {
       
        let content = listContent(input[i]);
        for (let j = 0; j < content.length; j++) {
            
            let childPath = path.join(input[i], content[i]);

            Display(childPath);
        }
    }
  }  
}
  
module.exports = {
    dispMultipleFileContentfn : dispMultipleFileContent,
}
 

 
