// const { log } = require("console");
const fs = require("fs");

// Sync... call
// fs.writeFileSync("./test.txt", "Hello there");

// Asyc it does not return anything it also expects a callback
// fs.writeFile("./test.txt", "HEllo wth ASync", (err)=> {})

// const result =fs.readFileSync("./contacts.txt", 'utf-8')// utf-8 basically saying its a txt file
// console.log(result);

// fs.readFile("./contacts.txt", "utf-8", (err, result)  => {
//     if(err){
//      console.log("Error", err);
//     }
//     else{
//         console.log(result);

//     }
// })

// fs.appendFileSync("./test.txt", `${Date.now()} HEy there\n`);

// fs.copyFileSync("./test.txt", "./copy.txt")
// fs.unlinkSync('./copy.text')

 console.log(fs.statSync('./test.txt'));
