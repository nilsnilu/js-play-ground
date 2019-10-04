
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
    var inputNumbers = inputArr[1].split(" ");
    for(var i = 0 ; i <numOfTest ; i++) {
      printFizzBuzz(inputNumbers[i]);
    };
    // process.stdout.write("Hi, " + input + ".\n");       // Writing output to STDOUT
}

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail

// Write your code here
function printFizzBuzz(element){
  var output;
  for(var i=1; i<=element; i++){
    if(i%3 === 0 && i % 5 === 0){
      output = "FizzBuzz";
    }else if (i % 3 === 0){
      output = "Fizz";
    }else if (i % 5 === 0){
      output = "Buzz";
    }else {
      output = "" + i ;
    }
    process.stdout.write(output + "\n");
  }
}
