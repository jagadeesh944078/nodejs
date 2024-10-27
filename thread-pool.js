const fs = require("fs");
const crypto = require("crypto");

/* here you can increase or decrease the Thread pool size */
process.env.UV_THREADPOOL_SIZE = 2;

/* here nodejs uses the thread pool */
/* here order of the execution not guranted over here whichever thread give data first it will give execute that first */
/* now iam using 5 crypto basically thread pool size is 4 only but here we are exceeding the size first 4 will be executed then remaining one will be executed */
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("1 -  cryptoPBKDF2 done");
});

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("2 -  cryptoPBKDF2 done");
});

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("3 -  cryptoPBKDF2 done");
});

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("4 -  cryptoPBKDF2 done");
});
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("5 -  cryptoPBKDF2 done");
});
// fs.readFile("./file.txt", "utf-8", () => {
//     console.log("file reading cb");
//   });
