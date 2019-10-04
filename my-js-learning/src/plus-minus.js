/**
 * Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros.
 * Print the decimal value of each fraction on a new line.
 */

'use strict';

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

// Complete the plusMinus function below.
function plusMinus(arr) {
  var total = arr.length;
  var positive = 0;
  var negative = 0;
  var zero = 0;
  arr.forEach(element => {
    if(element > 0){
      positive += 1;
    } else if(element < 0) {
      negative += 1;
    } else {
      zero += 1;
    }
  });
  if(total != 0 ){
    process.stdout.write('' + (positive/total).toPrecision(6) + '\n');
    process.stdout.write('' + (negative/total).toPrecision(6) + '\n');
    process.stdout.write('' + (zero/total).toPrecision(6) + '\n');

  } else {
    process.stdout.write('0');
    process.stdout.write('0');
    process.stdout.write('0');

  }
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}

