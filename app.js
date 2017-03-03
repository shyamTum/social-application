var express=require ('express');
var app=express();
var bodyParser=require('body-parser');
var mongoose = require('mongoose');

Householditem = require ('./models/householditem');
//connect to mongoose
mongoose.connect ('mongodb://localhost/socialappstore');
var db=mongoose.connection;

app.get('/',function(req,res){
	res.send('Go to app/householditems');
});

app.get('/api/householditems',function(req,res){
    Householditem.getHouseholditems(function(err,businessitems){
    	if(err){
    		throw err;
    	}
    	res.json(businessitems);
    });
});

app.listen(3000);
console.log("server running on port 3000");