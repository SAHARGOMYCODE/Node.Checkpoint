const fs = require("fs");
process.argv[2] = fs.readFileSync(
  process.argv[2].toString().split("\n").length
);
console.log(process.argv[2]);
