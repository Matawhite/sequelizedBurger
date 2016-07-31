
var express = require('express');
var router = express.Router();
var models = require('../models');
var Sequelize = require('sequelize');

router.get('/', function(req,res){
  res.redirect('/burgers');
});

router.get('/burgers', function(req,res){
  models.burgers.findAll().then(function(data){
    var handlebarObj = {burgers: data};
    res.render('index', handlebarObj);
  })
});

router.post('/burgers/new', function(req,res){
  models.burgers.create({
    burger_name: req.body.burger_name,
    devoured: req.body.devoured
    }).then(function(){
      res.redirect('/burgers');
    })
});

router.put('/burgers/update/:id', function(req, res) {
  models.burgers.find({
    where: {
      id: req.params.id
    }
  }).then(function(burger) {
    if(burger){
      burger.updateAttributes({
        devoured: req.body.devoured
      }).then(function(data) {
        res.redirect('/burgers');
      });
    }
  });
});

module.exports = router;
