const fuelRate = 10;

let distance = 580;
let fuelPrice = 75; //В контексте калькулятора логичнее вводить переменные
 
const trip = (distance / fuelRate) * fuelPrice;

console.log(trip); 