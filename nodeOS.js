let os = require('os')

console.log("Free RAM on our computer: ", os.freemem());
console.log("Total RAM:", os.totalmem());
console.log("CPU :", os.cpus());