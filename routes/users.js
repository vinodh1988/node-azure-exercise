var express = require('express');
var router = express.Router();
var operations = require('../db/module')

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  operations.all(function(err,data){
      if(err){
          console.log(err);
          res.sendStatus(500);
      }
      else
          res.json(data);

  })
});

module.exports = router;
