const express = require('express');
const bodyParser = require('body-parser');
const https =require("https");

const app=express()

app.use(bodyParser.urlencoded({extended:true}))


app.get("/",function(req,res){

            res.sendFile(__dirname +"/index.html")

})
  
  
app.post("/",function(req,res){
     
     /** request location from user  */   
    const userEnterLocation  = req.body.location;
    const appKey="6ad43b72b31a2d4fe48a12e69f073aa5";
    const units ="metric";

    const url=`https://api.openweathermap.org/data/2.5/weather?q=${userEnterLocation}&appid=${appKey}&units=${units}`

    https.get(url,function(response){   //take the string json data from url and pass to the response
                    
        response.on('data',function(data) {
            const WeatherObj=JSON.parse(data)  //converting string json data to js object
            /* initialize  data form api  */
            const LOCATION = WeatherObj.name
            const country  =WeatherObj.sys.country
            const icon    = WeatherObj.weather[0].icon   // icon code 

            res.write("<h1>Location: "+LOCATION+" Country: " +country +"</h1>" );
            res.write("<p> Description :"+ WeatherObj.weather[0].main+"</p>")
            res.write("<h1>Temparature "+WeatherObj.main.temp +"C and Feel like temparature: "+WeatherObj.main.feels_like+"</h1>")
          

            /* for icon */ 
            res.write("<img src= http://openweathermap.org/img/wn/"+icon+"@2x.png>")  // image code 
           
            /* open weather api link */
            res.write("<p><a href=\"https://openweathermap.org/weather-conditions\"> OPEN WEATHER API</a></p> ")
            res.write("<a href=\"/\" type=\"button\">Enter anothre location </a>")
            /* send to  */
            res.send(); 
        })

    }) 


})



app.listen(3000,function () {
    console.log("sever is up and running on 3000 ")
    
})