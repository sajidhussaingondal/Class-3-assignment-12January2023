/*
Create An Function Which Can Take Any Number 
Of Parameters And Do Addition Of All And Then Return 
The Result To Result Variable And After That Show The 
Result Using  Console
*/

function doCalculations(...numbers) {
  // function is defined, name of function is doCalculations. Rest parameters have been given using three dots (...) and
  // parameters name (numbers)
  let doCalculations = 0; //
  for (let arg of numbers) doCalculations += arg;
  return doCalculations;
}

let doAdditionOf = doCalculations(1, 2, 3);
console.log(doAdditionOf);
// doCalculations(1, 2, 3, 4, 5, 6, 7, 8);
// console.log(doCalculations);
