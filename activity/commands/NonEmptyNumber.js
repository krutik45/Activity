
let fs = require("fs");
let path = require("path");
let count = 1;
let input = process.argv.slice(2);
//let dirpath = input[1];
const readline = require('readline'); 

function nonEmpty(dirpath){
    const file = readline.createInterface({ 
        input: fs.createReadStream(dirpath), 
        output: process.stdout, 
        terminal: false
    }); 
      
    file.on('line', (line) => {
        if(line != ""){
            console.log((count++) +" "+ line);      
        }
    }); 
}

module.exports = {
    nonEmptyfn : nonEmpty,
}

  

 
 
