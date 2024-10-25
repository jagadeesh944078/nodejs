const fs = require("fs");

setImmediate(() => console.log("setImmediate"));

setTimeout(() => console.log("Timer Expired"), 0);

Promise.resolve("promise").then(console.log);

fs.readFile("./file.txt", "utf-8", () => {
  console.log("File Reading CB");
});

process.nextTick(() => {
  process.nextTick(() => console.log("inner next tick"));
  console.log("next tick");
});

console.log("Last line of the file");
