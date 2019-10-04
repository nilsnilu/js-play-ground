'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



// Complete the getLuckyFloorNumber function below.
function getLuckyFloorNumber(n) {
  let numFloor = n;
  let floorsGenerated = 0;
  let luckyFloors = null;
  for(let i=1 ; floorsGenerated < n  ; i++){
    let currFloor = '' + i;
    if(currFloor.includes('4') || currFloor.includes('13')){
      continue;
    }
    if(luckyFloors == null)
      luckyFloors = '' + i;
    else
      luckyFloors = luckyFloors + ' ' + i;
    floorsGenerated++;
  }
  return luckyFloors;
}

function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const ws = process.stdout;
    const n = parseInt(readLine().trim(), 10);

    const res = getLuckyFloorNumber(n);

    ws.write(res + '\n');

    ws.end();
}
