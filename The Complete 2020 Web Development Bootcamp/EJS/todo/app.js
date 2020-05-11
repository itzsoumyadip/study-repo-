const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app=express();
app.set('view engine','ejs');


var today =new Date()
var currentDay=today.getDay()
var currentDate=today.getDate()
var FY=today.getFullYear()

app.get("/",function(req,res){
    res.render('todoList',{foo:FY})
})



app.listen(8888,function(){
    console.log("Server is up and running at 8888");
 
})

