'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    /*
     * Write your code here.
     */
    var output = '';
    if(s){
      var inArr = s.split(':');
      var hh = inArr[0];
      var mm = inArr[1];
      var ss = inArr[2].substring(0,2);
      var amPm = inArr[2].substring(2);
      if(amPm == 'AM'){
        hh = Number(hh);
        if(hh == 12){
          hh = 0;
        }
        output = formatHr(hh) +':'+ mm+':'+ss;
      }else{
        hh = Number(hh);
        if(hh == 12){
          hh = 12;
        }else{
          hh = hh + 12;
        }
        output = formatHr(hh) +':'+ mm+':'+ss;
      }
    }
    // console.log('input' + s);
    return output;

}

function formatHr(hh){
  if(Number(hh) < 10){
    hh = '0' + hh;
  }
  return hh;
}

function main() {
    // console.log(process.env.OUTPUT_PATH);
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const ws = process.stdout;
    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
