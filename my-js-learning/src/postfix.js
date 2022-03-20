/*
Evaluates the prefix expression and calculates the result for the given
variable values.

@param {String} expression - the prefix expression to evaluate.
@param {Object} variables - all the variables in the expression are the keys of
    this object and their corresponding values are the values the variable
    should take
@returns {Number|null} the numerical result of the expression evaluated with the
    given variable values. If the expression is invalid, it will return `null`.
*/
function result_expression(expression, variables) {
  let stack = [];

  let expr  = expression.trim().split(/\s+/); // split express at space and ignore more then one space
  // console.log('Expression for evaluate:' + expr);

  // if (expr.length < 3 ){
  //   console.log('[Wrong Expression] there should be minimum 2 operand and one operator in expression');
  //   return null;
  // }

  for(let i = expr.length - 1 ; i >= 0; i --) {
    if(isNaN(expr[i])) { // Is input is not valid number?
      if (isValidOperator(expr[i])) { // Is input is valid operator?
        if(stack.length >= 2){
          let operand1 = stack.pop();
          let operand2 = stack.pop();
          // console.log('POP stack:' + operand1 );
          // console.log('POP stack:' + operand2 );
          // console.log('PUSH stack:' + evaluateExp(operand1,operand2,expr[i]) );
          let evRes = evaluateExp(operand1,operand2,expr[i]);
          if(evRes != null)
            stack.push(evRes);
        } else { // stack do not have enough operand for operation
          return null;
        }
      } else if (variables[expr[i]]) { // Is input is a variable?
       if( Number( variables[expr[i]] ) == NaN)
          stack.push(variables[expr[i]]);
        else
          return null;
      } else {
        return null;
      }
    } else {
      stack.push(Number(expr[i]));
      // console.log('PUSH stack:' + expr[i] );
    }
  }

  if(stack.length == 1 ) {
    return stack.pop();
  } else {
    // console.log('[Wrong Expression] stack should have only one element(result) at last, but that is not the case.')
    return null;
  }
}
function isValidOperator(op) {
  let opList = ['+','-','*','/'];
  if(opList.includes(op)){
    return true;
  }
  return false;
}

function evaluateExp(operand1, operand2, operator) {
  let result = null;
  switch(operator) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    case '*':
      result = operand1 * operand2;
      break;
    case '/':
      if(operand2 == 0) // devide by zero!
        result = null;
      else
        result = operand1 / operand2;
      break;
    default:
      result = null;
  }
  return result;
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  const [expression, variablesString] = _input.split('\n');
  //UGLY: replaces single quotes with double quotes square brackets to convert the string to valid JSON
  const variables = JSON.parse(variablesString.replace(/'/g, '"').replace(/\(/g, '[').replace(/\)/g, ']'));
  console.log(result_expression(expression, variables));
});
