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



// Complete the packNumbers function below.
function packNumbers(arr) {
  let arrOutput = [];
  for(let i = 0 ; i < arr.length;  ) {
    let j = i + 1;
    let same = 1;
    while(arr[j] == arr[i]) {
      same = same + 1;
      j = j + 1;
    }
    if(same != 1 ){
      arrOutput.push(arr[i] + ':' + same);
    } else {
      arrOutput.push(arr[i]);
    }
    i = j;
  }
  return arrOutput;
}

function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const ws = process.stdout;
    const arrCount = parseInt(readLine().trim(), 10);

    let arr = [];

    for (let i = 0; i < arrCount; i++) {
        const arrItem = parseInt(readLine().trim(), 10);
        arr.push(arrItem);
    }

    const res = packNumbers(arr);

    ws.write(res.join('\n') + '\n');

    ws.end();
}
