const express = require('express');
const https =require("https");


const app=express()



app.get("/",function(req,res){

    const url="https://api.openweathermap.org/data/2.5/weather?q=Kolkata,india&appid=6ad43b72b31a2d4fe48a12e69f073aa5&units=metric"

    https.get(url,function(response){
            console.log(response.statusCode)
          

    }) 

})




app.listen(3000,function () {
    console.log("sever is up and running")
    
})