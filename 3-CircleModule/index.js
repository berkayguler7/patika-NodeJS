const {circleArea, circleCircumference} = require('./circleModule.js');

const arguments = process.argv.slice(2);

console.log("Circumference of a circle with the given radius is: " + circleCircumference(arguments[0]));
console.log("Area of a circle with the given radius is: " + circleArea(arguments[0]));
