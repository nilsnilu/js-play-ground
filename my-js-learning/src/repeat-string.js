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
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the repeatedString function below.
function repeatedString(s, n) {
  let sLen = s.length;
  let aInSingleStr = 0;
  let totalA = 0;
  aInSingleStr = findNumOfA(s);

  let part = Math.floor(n / sLen);
  totalA = part * aInSingleStr;
  let reminder = n % sLen;
  totalA = totalA + findNumOfA(s.slice(0,reminder))
  return totalA;

  // while(counter < n && (counter + sLen) < n) {
  //   totalA = totalA + aInSingleStr;
  //   counter = counter + sLen;
  // }
  // if(counter < n){
  //   var diff = n - (counter);
  //   s = s.slice(0,diff);
  //   aInSingleStr = findNumOfA(s);
  //   totalA +=  aInSingleStr;
  // }
  // return totalA;
}

function findNumOfA(s) {
  let totalA = 0;
  for(let i = 0 ; i < s.length ; i++){
    if (s.charAt(i) == 'a')
      totalA += 1;
  }
  return totalA;
}

function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const ws = process.stdout;
    const s = readLine();

    const n = parseInt(readLine(), 10);

    let result = repeatedString(s, n);

    ws.write(result + "\n");

    ws.end();
}
