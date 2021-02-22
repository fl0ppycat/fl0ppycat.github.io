var axios = require('axios');
var express = require('express');
var router = express.Router();

const url = "https://dog.ceo/api/breeds/list/all";

router.get('/', function(req, res, next) {

  axios
    .get(url)
    .then(r => {
        let arr = new Array;

        JSON.parse(JSON.stringify(r.data.message), function (key, value) {
          console.log("key:" + key);

          if (isNaN(parseInt(key)) && (key.length > 3) ){ 
                                      axios
                                      .get(`https://dog.ceo/api/breed/${key}/images/random`)
                                      .then(rrr => {
                                        arr.push({
                                          breed: key,
                                          link: JSON.parse(JSON.stringify(rrr.data.message))
                                        })
                                      
                                      })
                                      .catch(function(e) {
                                        console.error(e); 
                                      });
                                    } 
        });
        let obj = { data: arr }
        console.log(arr);
      res.render('randomBreed', obj);
    })
    .catch(function(e) {
      console.error(e); 
    });

});

module.exports = router;
