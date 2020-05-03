const express = require('express')
const bodyParser=require('body-parser')

const app=express()
app.use(bodyParser.urlencoded({extended: true}))              //And Body Parser works with Express, so we can say app.use,

app.get('/',(req,res)=> res.sendFile(__dirname + "/index.html"))


app.post('/',function(req,res){

    console.log(req.body);
    var num1= Number(req.body.num1)
    var num2=Number(req.body.num2)
    var sum = num1+num2
     
    res.send("calculate sum is " + sum);
})



// for  bmi calculator

app.get('/bmiCalculator',(req,res)=>res.sendFile(__dirname +"/bmiCalculator.html"))


app.post('/bmiCalculator',function(req,res){

    
    var weight= parseFloat(req.body.weight)
    var height= parseFloat(req.body.height)
    var bmi = weight/(Math.pow(height,2))
    console.log(weight,height,bmi)
     
    res.send(" BMI " + bmi);
})



app.listen(9000,()=> console.log("server start working at port 9000"))

