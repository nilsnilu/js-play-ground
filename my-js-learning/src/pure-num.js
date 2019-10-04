process.stdin.resume();
process.stdin.setEncoding('utf-8');

var input_ = "";

process.stdin.on('data', function (data) {
    input_ += data.toString();
});

function Solve(N) {
    var input = N;
    var pureNumArr = [];
    // Prepare ordered list of required pure number
    pureNumArr = preparePureNumbers(input);
    // Return pure number at position N
    return pureNumArr[input];
}

function preparePureNumbers(){
  // Prepare 2,4,6... digit pure numbers with 4 and 5
  // decide how many numbers generation required
    // Two digit 2^2 pure numbers
    // Four digit 2^4 pure numbers
    // Because we have only two (binary) digits

}

process.stdin.on('end', function () {
    input_ = input_.split("\n");
    var T = parseInt(input_[0], 10);
    input_.shift();
    for(var t_i=0; t_i<T; t_i++) {
        var N = parseInt(input_[t_i], 10);

        var solution = Solve(N);
        console.log(solution);
    }

    process.exit();
});
