
const fs = require('fs')
// const os = require('os')

// console.log(os.cpus().length)

console.log("2")
//Blocking...
// const result = fs.readFileSync("contacts.txt", "utf-8")
// console.log(result)
console.log("3");

fs.readFile("contacts.txt", "utf-8", (err, result) =>{
    console.log(result)
})
console.log("6");
