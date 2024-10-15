require("./xyz.js"); // call one module into another module
// var obj = require("./sum.js");
// const { x, calculateSum } = require("./calculate/sum.js");
// const { calculateMultiply } = require("./calculate/multiply.js");

/* here you no need to write index.js because default it will take index.js file only */
const { x, calculateMultiply, calculateSum } = require("./calculate");
const data = require("./data.json");
console.log(data);

/* es modules pattern */
// import { x, calculateSum } from "./sum.js";

var name = "Namasthe node js";
var a = 20;
var b = 10;
calculateSum(a, b);
calculateMultiply(a, b);
console.log(x);
