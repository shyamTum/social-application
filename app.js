var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var mongoose=require('mongoose');

Household= require('./models/household');

//Connect to db
mongoose.connect('mongodb://localhost/socialstore');
var db=mongoose.connection;

app.get('/', function(req,res){
	res.send('Hello world!');
});

app.get('/api/household',function(req,res){
	Household.getHousehold(function(err,household){
		if(err){
			throw err;
		}
		res.json(household);
	});
});

app.listen(3000);
console.log('Running on port 3000');


