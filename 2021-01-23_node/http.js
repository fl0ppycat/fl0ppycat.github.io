const request = require('request');
const http = require('http');
let url = 'https://auto.ria.com/uk/search/?indexName=auto,order_auto,newauto_search&body.id[4]=2&year[0].gte=2012&year[0].lte=2012&categories.main.id=1&brand.id[0]=6&price.currency=1&gearbox.id[1]=2&gearbox.id[2]=3&fuel.id[1]=2&drive.id[0]=1&abroad.not=0&custom.not=1&page=0&size=50';

    request(url, function (error, response, body, serverStart) {
        if(error){
            console.log("ERROR!");
            console.error('error:', error); 
        } else {
            let carObjectsArr = new Array;
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
        
            
            function serverStart(array) {        
                const server = http.createServer((request, response) => {
                    let tableString = "<table>";            
                    array.forEach(element => {
                        tableString = tableString + "<tr>";
                        Object.values(element).forEach(element => {
                            tableString = tableString + `<td>${element}</td> `
                        });
                        tableString = tableString + "</tr>";
                    });
                    
                    tableString = tableString + "</table>";

                    response.setHeader("Content-Type", "text/html");
                    response.write(tableString);
                    response.end();
                });
            
                // server.on(('error', (err) => {
                //     console.log(err);
                // }))
            
                server.listen(3000, () => {
                    console.log('opened server on ', server.address().port, ' port');
                    console.log('server obj:', server.address());
                })
            }
            serverStart(carObjectsArr);
        } 
    });
