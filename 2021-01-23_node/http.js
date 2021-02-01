let carObjectsArr = new Array;


const request = require('request');

request('https://auto.ria.com/uk/search/?indexName=auto,order_auto,newauto_search&body.id[4]=2&year[0].gte=2012&year[0].lte=2012&categories.main.id=1&brand.id[0]=6&price.currency=1&gearbox.id[1]=2&gearbox.id[2]=3&fuel.id[1]=2&drive.id[0]=1&abroad.not=0&custom.not=1&page=0&size=50', function (error, response, body) {
    if(error){
        console.log("ERROR!");
        console.error('error:', error); // Print the error if one occurred
    } else {
        let str = body;
        let tempArr = str.split('>')
            .filter(element => (element.includes('class="hide"')))
            .filter(element => (element.includes('data-mark-name')))
            .map(element => element.split(' data'))
            .forEach(element => {
                tempCar = new Object;
                tempCar.mark = element.filter(element => (element.includes('mark-name'))).map(element => element.slice(element.indexOf('"')+1, element.lastIndexOf('"')));
                tempCar.model = element.filter(element => (element.includes('model-name'))).map(element => element.slice(element.indexOf('"')+1, element.lastIndexOf('"')));
                tempCar.year = element.filter(element => (element.includes('year'))).map(element => element.slice(element.indexOf('"')+1, element.lastIndexOf('"')));

                carObjectsArr.push(tempCar)
            });

        pricesArr = str.split('>')
            .filter(element => (element.includes('data-main-price')))
            .map(element => element.slice(element.lastIndexOf('='), String(element).length ))    
            .map(element => element.slice(element.indexOf('"')+1, element.lastIndexOf('"')));

        carObjectsArr.forEach(function(element, index){
            element.model = `${element.mark[0]} ${element.model[0]}`;
            element.year = `${element.year[0]}`; 
            element.price = pricesArr[index];
            delete element.mark;
        });


        console.log(" ");
        // console.log(carObjectsArr);


        



        const http = require('http');
        const { table } = require('console');

        const server = http.createServer((request, response) => {

            let tableString = "<table><tbody>";

            carObjectsArr.forEach(element => {
                tableString = tableString + "<tr>";
                Object.values(element).forEach(element => {
                    tableString = tableString + `${element}`
                });
                tableString = tableString + "</tr>";
            });
        
            tableString = tableString + "</tbody></table>";
            // console.log(`3. tableString = ${tableString}`);

            response.setHeader("Content-Type", "text/html");
            response.write(`${tableString}`);
            response.end();
            // response.end(`<html><body><h1>This is HTML</h1></body></html>`);
        });

        // server.on(('error', (err) => {
        //     console.log(err);
        // }))

        server.listen(3000, () => {
            console.log('opened server on ', server.address().port, ' port');
            console.log('server obj:', server.address());
        })

    }  
});

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






