
const request = require('request');

request('http://dou.ua', function (error, response, body) {
    if(error){
        console.log("ERROR!");
        console.error('error:', error); // Print the error if one occurred
    } else {
        let str = body;
        let strLen = 'CACHE/images/img/announces/'.length;
        let tempArr = str.split('>')

            .map(element => element.slice(element.indexOf('CACHE/images/img/announces')))
            .filter(element => (element.includes('announce')))
            .map(element => element.slice('CACHE/images/img/announces'))
            .map(element => element.slice(0, element.indexOf('"')))
            .map(element => element.slice(strLen))
            .map(element => element.split('/'));
            

        console.log(tempArr);
    }  
    
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
});


// request('http://google.com/doodle.png').pipe(fs.createWriteStream('doodle.png'))

// let str = "sfasdg sasfg sfgvsdfgs fsg sfgsdfg";
// str = str.substring(0, str.lastIndexOf(" "));

// console.log(str);
