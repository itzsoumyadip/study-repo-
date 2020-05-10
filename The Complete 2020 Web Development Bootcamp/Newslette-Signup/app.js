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
// this data will be sent to mailchip 
    const data={
        members:[
            {
                email_address:email,
                status:"subscribed",
                merge_field:{
                    FNAME:fname,
                    LNAME:lname
                }    

            }
        ]   

    };
  
const jsonData=JSON.stringify(data);   // this data will be send to mailchip  

const url ="https://us18.api.mailchimp.com/3.0/lists/d4ede0aabb"   

const options= {
    method:"POST",
    auth:"dip:889107af5271c526d41e4963d5f45b10-us18"    //any user name:with password(apikey)


}
 
const request=https.request(url,options,function(response){
    /** data recive from mailchip  */
     response.on("data",function(data){
        console.log(JSON.parse(data)); /**  data recive like new members  , that data will be send from mailchip server that new data enter or error  */
                 
     })
})
/** request */
/** json data pass to mailchip server*/
request.write(jsonData);
/** after we done with the request  */
request.end();


})





app.listen(3300,function(){
    console.log("server up and running in port 3300");
    
})