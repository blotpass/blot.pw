var express = require("express");

module.exports = function appctor(cfg) {
  var app = express();

  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');

  app.use(require('nowww')());
  
  app.use('/images',express.static(__dirname+'/images'));
  app.use('/scripts',express.static(__dirname+'/scripts'));
  app.use(express.static(__dirname+'/www'));

  app.get('/', function(req,res) {
    res.render('index.jade');
  });
  
  return app;
};