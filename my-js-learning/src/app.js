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
    var instruction = input; 
    var output = processResult(instruction);
    process.stdout.write(output);       // Writing output to STDOUT
}

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail

// Write your code here
function processResult(instruction){
    var charInst = instruction.split('');
    var posX = 0;
    var posY = 0;
    charInst.forEach(char => {
        switch(char){
            case 'L':
                posX--;
                break;
            case 'R':
                posX++;
                break;
            case 'U':
                posY++;
                break;
            case 'D':
                posY--;
                break;
        }
    });
    return posX + ' ' + posY;
}
