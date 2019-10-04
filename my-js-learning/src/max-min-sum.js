/*
 Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.
 *Then print the respective minimum and maximum values as a single line of two space-separated long integers.
* For example, arr 1,3,5,7,9 then our minimum sum is 16 and our maximum sum is 24 . */

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

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
  var min = arr[0];
  var max = arr[0];
  var total = 0;
  arr.forEach(element => {
    total += element;
    if(element < min){
      min = element;
    }
    if(element > max){
      max = element;
    }
  });
  console.log(''+(total-max)+' '+(total-min));

}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
