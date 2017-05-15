var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;




//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());


var routes = require('./myroutes');
routes(app);


app.listen(port);


console.log('RESTful API server started on: ' + port);
