for (let i = 3; i < process.argv.length; i++) {
  process.argv[2] = +process.argv[2] + Number(process.argv[i]);
}
console.log(process.argv[2]);
