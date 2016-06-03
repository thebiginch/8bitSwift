var express = require('express');
var http = require('http');
var app = express();
var path = require('path');

var publicPath = path.join(__dirname,"../public")

app.use(express.static(publicPath));

app.get('/',function(req,res,next){	
	res.sendFile(path.join(__dirname,'../index.html'));
});

app.listen(8000,function(){
	console.log('listening on port 8000');
})
