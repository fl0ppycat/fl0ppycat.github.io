const axios = require("axios");

let arr = [];

for(let i=0 ; i<30 ; i++){
    arr.push(axios.get("https://dog.ceo/api/breeds/image/random").then(r => r.data.message));
}

Promise.all(arr)
    .then(a => console.log(a))
    .catch(err => console.log(err));

