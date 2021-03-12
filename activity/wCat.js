let fs = require("fs");
let path = require("path");

let input = process.argv.slice(2);
let option = input[0];

let DispContentObj = require('./commands/DispContent');
let bigLineBreakobj = require('./commands/RemoveSpace');
let giveNumberObj = require('./commands/GiveNumber');
let nonEmptyNumberObj = require('./commands/NonEmptyNumber');


if(option == '-s' || option == '-n' || option == '-b'){
  if(input.length <= 2){
   // let dirpath = input[1];
    //console.log("hii");
    //console.log(dirpath);
    switch(option){
        case '-s' :
          bigLineBreakobj.bigLineBreakfn(input[1]);     
           break;

        case '-n' :
          giveNumberObj.giveNumberfn(input[1]+"");
           break;
          
        case '-b' :
          nonEmptyNumberObj.nonEmptyfn(input[1]);
        break;

        default :
            console.log("Wrong command");
            break;
    }

    
  } else{
    if(input.length == 3 && input[0] == '-n' && input[1] == '-s'){
      giveNumberObj.giveNumberfn(input[2]);
    }
    else if(input.length == 3 && input[0] == '-n' && input[1] == '-b'){
      giveNumberObj.giveNumberfn(input[2]);
    }
    else if(input.length == 3 && input[0] == '-b' && input[1] == '-n'){
      nonEmptyNumberObj.nonEmptyfn(input[2]);
    }
    else if(input.length == 3 && input[0] == '-s' && input[1] == '-n'){
      bigLineBreakobj.bigLineBreakfn(input[2]);
    }
    else{
      console.log("enterr valid command");
    }
  }
}else{
  DispContentObj.dispMultipleFileContentfn(input);
}