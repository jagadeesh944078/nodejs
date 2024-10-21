const fs = require("fs");
const https = require("https");
console.log("hello world");
var a = 1078698;
var b = 20986;

//synchronus function
/* Js engine will offload this method to libuv */
/* basically this will block the JS engine main thread */
fs.readFileSync("./file.txt", "utf-8");

https.get("https://dummyjson.com/docs/products/1", () => {
  console.log("Fetched Data Sucessfully");
});

setTimeout(() => {
  console.log("settimeout called after 5 seconds");
}, 5000);

fs.readFile("./file.txt", "utf-8", (err, data) => {
  console.log("File Data", data);
});

function multiply(a, b) {
  const result = a * b;
  return result;
}

const c = multiply(a, b);
console.log("multipication result is", c);
