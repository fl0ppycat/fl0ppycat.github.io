var moment = require('moment');
var express = require('express');
var router = express.Router();


router.get('/:var1/:var2', function(req, res, next) {
  const obj = {
    // date: moment(`${req.params.var1}-${req.params.var2}`, `YYYY-MM`),     
    date: moment({ year :req.params.var1, month :req.params.var2-1}),
    tmpDate: moment().day(1),
  }
  res.render('calendar', obj);  
});

router.get('/', function(req, res, next) {
  // res.render('calendar');  
  res.redirect(`/${req.params.var1}/${req.params.var2}`);
});

module.exports = router;
