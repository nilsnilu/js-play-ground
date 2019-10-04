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

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
  var sockPairObj = {};
  var pairTotal = 0;
  ar.forEach(element => {
    if(sockPairObj[element]){
      sockPairObj[element] = sockPairObj[element] + 1;
    } else {
      sockPairObj[element] = 1;
    }
  });
  for(var k in sockPairObj){
    if(sockPairObj[k] > 1){
      var colorTotal =  (sockPairObj[k] % 2 == 0) ? sockPairObj[k] : (sockPairObj[k] -1) ;
      pairTotal = pairTotal + (colorTotal/2)
    }
  }
  return pairTotal;
}

function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const ws = process.stdout;
    const n = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = sockMerchant(n, ar);

    ws.write(result + "\n");

    ws.end();
}
