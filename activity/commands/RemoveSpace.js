let fs = require("fs");
let path = require("path");

function bigLineBreak(dirpath){
  let isFile = isFileorNOt(dirpath);
  if (isFile == true) {
      let fcontent = fs.readFileSync(dirpath);
      
     reduceNewlines(fcontent);

  } else {
     
      let content = listContent(dirpath);
      for (let i = 0; i < content.length; i++) {
          
          let childPath = path.join(dirpath, content[i]);

          dispContent(childPath);
      }
  }
}
function isFileorNOt(dirpath) {
    return fs.lstatSync(dirpath).isFile();
}
function listContent(dirpath) {
    return fs.readdirSync(dirpath);
}

function reduceNewlines(outputTextEditNewLines) {

    for (let key = 0; key < outputTextEditNewLines.length; key++) {
      if (outputTextEditNewLines[key] == ''){ 
          outputTextEditNewLines[key] = '\n';
    }
      else{
        outputTextEditNewLines[key] = outputTextEditNewLines[key];
      } 
    }
  
    arrayToString = outputTextEditNewLines + ""; // convert object myArray to string
    console.log(arrayToString.replace(/([\r\n]){1,}/g, '\n')); // exports the text as it should
  
  }

  module.exports = {
    bigLineBreakfn : bigLineBreak,
  }


/*let fs = require("fs");
let path = require("path");
let count = 1;
let input = process.argv.slice(2);
const readline = require('readline'); 
  
const file = readline.createInterface({ 
    input: fs.createReadStream(input[0]), 
    output: process.stdout, 
    terminal: false
}); 
  
file.on('line', (line) => {
    if(line != "")
    console.log( line); 
}); */
