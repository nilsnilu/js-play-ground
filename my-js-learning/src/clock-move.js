process.stdin.resume();
process.stdin.setEncoding('utf-8');

var input_ = "";

process.stdin.on('data', function (data) {
    input_ += data.toString().trim();
});

function solve(S) {
  var input = S;
  var distance = 0;
  var maxDistance = 0;
  var moveInst  = input.split('');
  var antiClockInst = 0;
  var clockInst = 0;
  var defaultDir = 'C';

  // Count total clock and anti clock instruction
  moveInst.forEach(element => {
    if(element === 'A'){
      antiClockInst++;
    }else if (element === 'C'){
      clockInst++;
    }
  });

  // decide direction in case of ? in instruction
  defaultDir  = getDirectionForQuestion(antiClockInst,clockInst);

  // calculating distance as per direction
  moveInst.forEach(element => {
    if(element === 'A'){
      distance--;
    }else if (element === 'C'){
      distance++;
    }else {
      if(defaultDir === 'A'){
        distance--;
      }else{
        distance++;
      }
    }
    if(Math.abs(distance) > maxDistance){
      maxDistance = Math.abs(distance);
    }
  });
  return maxDistance;
}

// this function decides direction in case of ?
function getDirectionForQuestion(antiClockInst, clockInst){
  if(antiClockInst > clockInst){
    return 'A';
  }else if (clockInst > antiClockInst){
    return 'C';
  }else {
    return 'C';
  }
}

process.stdin.on('end', function () {
    input_ = input_.split("\n");
    var T = parseInt(input_[0], 10);
    input_.shift();
    for(var t_i=0; t_i<T; t_i++) {
        var S = input_[t_i];

        var solution = solve(S);
        console.log(solution);
    }

    process.exit();
});
