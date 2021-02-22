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
          if (isNaN(parseInt(key))){ arr.push(key); } 
        });
        let obj = { data: arr }
      res.render('index', obj);
    })
    .catch(function(e) {
      console.error(e); 
    });

});

module.exports = router;
