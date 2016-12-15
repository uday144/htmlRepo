var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('newlist1',['newlist1']);
var db1 = mongojs('AddressBook', ['Persons']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.get('/contactlist',function(req,res){
	console.log("I receive a get request")
    db.newlist1.find(function(err, docs){
    console.log(docs);
    res.json(docs);
	});
});
app.get('/persons', function(req, res){
	console.log('Received find all persons request');
	db1.Persons.find(function(err, docs){
		console.log(docs);
		res.json(docs);
	})
});
app.post('/persons',function(req,res){
  console.log(req.body);
  db1.Persons.insert(req.body,function(err,doc){
      res.json(doc);
  });
});
app.listen(3001);
console.log("server running on 3001");