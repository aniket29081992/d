var express = require('express');
var router = express.Router();
var storeSMS=require('./storeSMS')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Saankhya' });
});

router.post('/api/login',storeSMS.storeData);
module.exports = router;
