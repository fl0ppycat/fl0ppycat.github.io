
const request = require('request');

function getRandomDogLink() {
    
    let dogLink = request('https://dog.ceo/api/breeds/image/random', function (error, response, body) {
        if(error){
            console.log("ERROR!");
            console.error('error:', error); 
        } else {
            
            let jsonObj = JSON.parse(response.body);
            dogLink = jsonObj.message

            // console.log(dogLink);

            return(dogLink);
        }  
    });
return(dogLink);    
}

for (let i=0 ; i<10 ; i++){
    console.log(getRandomDogLink());
}




// return(tableString);
// }




// function ololo() {

//         const http = require('http');
//         const { table } = require('console');

//         const server = http.createServer((request, response) => {

//             // let tableString = azaza();

//             console.log("3: " + tableString);
//             console.log(" ");


//             response.setHeader("Content-Type", "text/html");
//             response.write(`${tableString}`);
//             response.end();
//         });

//         // server.on(('error', (err) => {
//         //     console.log(err);
//         // }))

//         server.listen(3000, () => {
//             console.log('opened server on ', server.address().port, ' port');
//             console.log('server obj:', server.address());
//         })

// }


















// console.log("next");


// let tableString = "<table>";

// carObjectsArr.forEach(element => {
//     console.log("next");
    
//     tableString = tableString + "<tr>";
    
//     Object.values(element).forEach(element => {
//         tableString = tableString + `${element}`
//     });

//     tableString = tableString + "</tr>";
// });

// tableString = tableString + "</table>";


// const http = require('http');
// const { table } = require('console');

// const server = http.createServer((request, response) => {

//     response.setHeader("Content-Type", "text/html");

//     // console.log(request);
//     // console.log(request.headers);
//     // console.log(request.url);



//     // response.write('<h2>hello world</h2>');
//     response.write(`${tableString}`);

//     response.end();
//     // response.end(`<html><body><h1>This is HTML</h1></body></html>`);
// });

// // server.on(('error', (err) => {
// //     console.log(err);
// // }))

// server.listen(3000, () => {
//     console.log('opened server on ', server.address().port, ' port');
//     console.log('server obj:', server.address());
// })






