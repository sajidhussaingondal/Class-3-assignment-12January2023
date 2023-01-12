/*
Create An Function Which Can Take Any Number 
Of Parameters And Do Addition Of All And Then Return 
The Result To Result Variable And After That Show The 
Result Using  Console
*/

function doCalculations (...numbers){
    let sum = 0;
    for (let arg of numbers) sum += arg;
    return sum;
  }
  
  let x = doCalculations(1, 2, 3, 4, 5, 6, 7, 8);
console.log(x);