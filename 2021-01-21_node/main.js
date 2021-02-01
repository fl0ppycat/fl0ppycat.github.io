const fs = require('fs');

// let a = 2;
// console.log(a + 3);

let text = fs.readFileSync("2.txt");
console.log(text.toString());

// fs.writeFile('./files/1.txt', 'hello world', 'utf-8', (err) => {
//     if(err) {
//         console.log("ERR!:", err)
//         return;
//     }
//     console.log('file 1.txt created!');
// });


fs.writeFileSync();
console.log(22);