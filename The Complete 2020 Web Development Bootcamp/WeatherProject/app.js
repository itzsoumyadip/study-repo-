const express = require('express');
const https =require("https");


const app=express()



app.get("/",function(req,res){

    const url="https://api.openweathermap.org/data/2.5/weather?q=Kolkata,india&appid=6ad43b72b31a2d4fe48a12e69f073aa5&units=metric"

    https.get(url,function(response){   //take the string json data from url and pass to the response
                    
        response.on('data',function(data) {
            const WeatherObj=JSON.parse(data)  //converting string json data to js object
            const LOCATION = WeatherObj.name
            const country  =WeatherObj.sys.country
            const icon    = WeatherObj.weather[0].icon
            res.write("<h1>LOCATION: "+LOCATION+" Country: " +country +"</h1>" );
            res.write("<p> Description :"+ WeatherObj.weather[0].main+"</p>")
            res.write("<h1>Temparature "+WeatherObj.main.temp +"C and Feel like temparature: "+WeatherObj.main.feels_like+"</h1>")
            res.write("<img src= http://openweathermap.org/img/wn/"+icon+"@2x.png>")  // image code 
            res.write("<p><a href=\"https://openweathermap.org/weather-conditions\"> OPEN WEATHER API</a></p> ")
            res.send(); 
        })

    }) 

})




app.listen(3000,function () {
    console.log("sever is up and running")
    
})