var prompt = require('prompt-sync')();

//Question-2
// function calArea(rad) {
//     console.log("Printing")
//     return 3.14*rad*rad;
// }

// var radi = prompt("enter radius: ")
// var res = calArea(radi);
// console.log(res)

// Question-3

// function performeOperation(a, b, callBackFunction) {
//     return callBackFunction(a, b);
// }
// var add = function(a, b) {
//     return parseInt(a)+parseInt(b);
// }
// sub = (a,b) => {
//     return a-b;
// }
// function mul(a,b) {
//     return a*b;
// }
// function div(a, b) {return a/b;}
// a = prompt("enter value of a: ")
// b = prompt("Enter value of B: ");
// //var ans = performeOperation(a, b, add);
// console.log(add(a,b))
// //console.log(ans);

// Question-4

// var fs = require('fs');
// fs.appendFile('Text1.txt', '\nHello world', () => {
//     console.log("File saved")
// })
// fs.readFile('Text2.txt', 'utf-8', (err, data) => {
//     if(err) {
//         console.error("Error reading file: ", err);
//         return ;
//     }
//     console.log(data);
// });


// Question-5

// var os = require('os');

// console.log("Total Memory: ", os.totalmem());
// console.log("Free Memory: ",os.freemem());
// console.log("Platform: ", os.platform());
// console.log("No.of CPU Cores: ", os.cpus().length);

// Question-6

// var _ = require('lodash');
// function checkEven(arr) {
//     var result = _.filter(arr, num => num%2 === 0);
//     return _.sumBy(result);
// }
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(checkEven(arr));