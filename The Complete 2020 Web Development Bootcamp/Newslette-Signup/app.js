const express = require('express');
const bodyParser = require('body-parser');
const https =require("https");

const app=express()

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))


app.get("/",function(req,res){

    
    res.sendFile(__dirname +"/signup.html")

})

app.post("/",function(req,res){
    const fname=req.body.fname
    const lname=req.body.lname
    const email=req.body.email
    res.write(fname)
    res.write(lname)
    res.write(email)
    res.send()

})





app.listen(3300,function(){
    console.log("server up and running in port 3300");
    
})