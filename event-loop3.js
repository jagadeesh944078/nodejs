const fs = require("fs");

setImmediate(() => console.log("setImmediate"));

setTimeout(() => console.log("timer expired"), 0);

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt", "utf-8", () => {
  setTimeout(() => console.log("2nd timer"), 0);
  process.nextTick(() => console.log("2nd next tick"));
  setImmediate(() => console.log("2nd set Immediate"));
  console.log("File Reading CB");
});

process.nextTick(() => console.log("process.nexttick"));
console.log("Last line of the file");
