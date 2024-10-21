const crypto = require("node:crypto");
console.log("hello world");

var a = 1078698;
var b = 20986;
/* it will block the main thread so dont use it */
crypto.pbkdf2Sync("password", "salt", 500000, 50, "sha512");
console.log("first key is generated");

/* suppose if you are generating any key you can generate using thsi crypto */
/* here are also when you do crypto. you can see lot of methods so here whenever you see at the end sync then its blocking main thread */
/*  there is a method pbkdf2() which means password based key deverivated function */
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("second key is Generated");
});

function multiply(a, b) {
  const result = a * b;
  return result;
}

const c = multiply(a, b);
console.log("multipication result is", c);
