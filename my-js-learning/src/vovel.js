// Sample code to perform I/O:

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function main(input) {
    var inputArr = input.split("\n");
    var numOfTest = parseInt(inputArr[0]);
    var vowelCount = 0;
    for(var i=1; i<=numOfTest; i++){
        vowelCount = countVowel(inputArr[i]);
        process.stdout.write("" + vowelCount +"\n");
    }
    // process.stdout.write("Hi, " + input + ".\n");       // Writing output to STDOUT
}

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail

// Write your code here
function countVowel(inputStr){
    var totalCountInStr = 0;
    var strSet = new Set();
    for(var i = 0 ; i < inputStr.length ; i++){
        for(var j = i+1; j <= inputStr.length ; j++){
            strSet.add(inputStr.substring(i,j));
        }
    }

    strSet.forEach(element => {
        totalCountInStr += _countVowel(element);
        // process.stdout.write("Input" + element + "\n");
    });
    return totalCountInStr;
//  process.stdout.write("Input" + inputStr + "\n");
}

function _countVowel(input){
    var vowels = new Set(['a','e','i','o','u','A','E','I','O','U']);
    var arr = input.split('');
    var count = 0 ; 
    arr.forEach(element => {
        if(vowels.has(element)){
            count++;
        }
    });
    return count;
}