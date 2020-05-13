const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');


const app=express();


app.set('view engine','ejs');
app.use(bodyParser.urlencoded({ extended:true}))

var items=[2,3,5,]



app.get('/',function(req,res){

var today =new Date()
var option ={
    weekday:"long",
    day:"numeric",
    month:"long",
    year:"numeric"
}
var currentDate=today.toLocaleDateString("en-US",option)    

     res.render("todoList",{Day:currentDate,items:items })
    
})

app.post("/",function(req,res){
   var item=req.body.newItem
   items.push(item)
   res.redirect('/')

     
})



app.listen(8888,function(){
    console.log("Server is up and running at 8888");
 
})

