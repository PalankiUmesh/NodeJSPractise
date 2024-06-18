var prompt = require('prompt-sync')();
var a = 10;
var b = 20;
const name = "Umesh";
console.log("Ans : "+(a+b));
console.log(typeof name);

const ages = [10, 20, 16, 22]
const result = ages.filter(checkAge)

function checkAge(ages) {
    return ages<=18;
}

console.log(result)

var aa = prompt("Enter the num");
console.log(aa);