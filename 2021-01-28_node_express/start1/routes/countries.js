var axios = require('axios');
var express = require('express');
var router = express.Router();
// var multer = require("multer");
// var upload = multer();

router.get('/', async function(req, res) {
  const regionsNameArr = new Array("africa", "americas", "asia", "oceania", "europe");
  // const regionPromisesArr = regionsNameArr.map( (element) => {
  //   return axios.get(`https://restcountries.eu/rest/v2/region/${element}`);
  // });    
  // const regionsObjectsArr = await Promise.all(regionPromisesArr);
  // const regions = regionsObjectsArr.map(element => {

  //   const arr = new Array;
  //   element.data.forEach(element => {
  //     arr.push(element.name)
  //   });

  //   const regionObj = new Object;
  //   regionObj.name = element.config.url.substr(element.config.url.lastIndexOf("/")+1);
  //   regionObj.countriesArr = arr;
  //   return(regionObj);
  // });

  res.render('countries', {regions: regionsNameArr});
});


router.post('/', async function (req, res) {
   
  const regionObject = await axios.get(`https://restcountries.eu/rest/v2/region/${req.body.name}`);
  let countriesArr = regionObject.data.map(element => {
      return({ name: element.name, flag: element.flag, code: element.alpha2Code});
    }
  );
  
  const catsBreedsArr = await axios.get(`https://api.thecatapi.com/v1/breeds`);
  
  const catObjectsArr = catsBreedsArr.data.map(element => {
      const catName = element.name;
      const catUrl = 
        (element.hasOwnProperty('image') && element.image.hasOwnProperty('url'))
        ?
        element.image.url
        :
        "https://cdn2.thecatapi.com/logos/thecatapi_256xW.png";
      const catCode = element.country_code;
      return({name: catName, url: catUrl, code: catCode});
    }
  );

  countriesArr.map(countryElement => {
    countryElement.cats = new Array;
      catObjectsArr.map(catElement => {
        // console.log("catElement.code ", catElement.code);
        // console.log("countryElement.code ", countryElement.code);

        if(catElement.code == countryElement.code) {
          countryElement.cats.push(catElement);
        }        
      }); 
    });




  // console.log("======================");

  // countriesArr.forEach(element => {
  //   console.log("name: ", element.name);
  //   element.cats.forEach(element =>{
  //     console.log("cat: ", element.name);
  //   })
  // })

// console.log(catObjectsArr);
// console.log("-----------------------------------");

// console.log(countriesArr);
  
  // console.log("======================");


  
  res.send(countriesArr);
});

module.exports = router;
