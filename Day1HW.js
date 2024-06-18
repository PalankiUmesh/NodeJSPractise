var prompt = require('prompt-sync')();

// Question-1
var age = prompt("Enter age")
var ans = checkAge(age);

function checkAge(age) {
    if(age < 18) return "You got a 20% discount";
    else if(age >= 18 && age <= 65) return "Normal ticket price";
    else return "You got a 30% senior discount";
}
console.log(ans);

//Question-2
// var length = prompt("Enter length: ")
// var width = prompt("Enter Width: ")
// var areaOfRectangle = length * width
// console.log("Area of rectangle: "+areaOfRectangle)

// Quesstion-3
// function product(name, price, isStock) {
//     this.name = name;
//     this.price = price;
//     this.inStock = this.inStock;
// }

// const product1 = new product("Sai", 100.00, true)
// const product2 = new product("Umesh", 99, false)
// const product3 = new product("Adithya", 120.98, true)

// console.log(`Product 1: 
// Name: ${product1.name}, 
// Price: $${product3.price.toFixed(2)}, 
// In Stock: ${product1.inStock}`);

// Question-4
// guestList = ["sai", 'umesh', 'adithya', 'palanki', 'aanya'];
// var nameToCheck = prompt("Enter the name to check: ")
// const ans = checkName(guestList, nameToCheck)

// function checkName(guestList, nameToCheck) {
//     if(guestList.includes(nameToCheck)) return ("Welcome to the party " + nameToCheck);
//     else return "Sorry, you are not on the guest list";
// }
// console.log(ans)

// Question - 5
const weatherForecast = {
    date : "2024-06-05",
    temperature : 38,
    conditions : "sunny",
    humidity : 70
};

console.log("Weather forecast for: " + weatherForecast.date)
console.log("Temperature: "+weatherForecast.temperature)
console.log("Condition: "+weatherForecast.conditions)
console.log("Humidity: "+weatherForecast.humidity)

