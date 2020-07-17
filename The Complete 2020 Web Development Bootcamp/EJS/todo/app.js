
// modules import
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const date= require(__dirname +'/dateModule.js')
const mongoose = require('mongoose');

console.log(date)


// using them with express 

const app=express();

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))




// mongoose conntection 



mongoose.connect('mongodb://localhost:27017/todolistDB', {useNewUrlParser: true, useUnifiedTopology: true});


const itemsSchema=mongoose.Schema({
	name:String,
})


const item=mongoose.model("item",itemsSchema)


const item1=new item({
	name:"welcome to todo list connected with mongoDB",
})

const item2=new item({
	name:"Yah with the help form mongoose ",
})

const item3=new item({
	name:"letz do it ",
})

var documetItem=[item1,item2,item3];













/* 
   list of array items that are in use when this example todolist works  with out  database 
   
   var items=[2,3,5,5]
var workItem=[2,3]

 */




// request and response 


app.get('/',function(req,res){


  
		 let currentDay=date.getDay()  // calling the function that are define in module dateModule
		 

	
		 // for  database 
		 
	
				item.find(function(err,items){
					
				   if (items.length===0){
					item.insertMany(documetItem,(err)=>{
						if(err)
							console.log(err)
						else
						console.log("Successfully inserted  our default items  in MongoDB");
						
					});
					
					res.redirect("/");
				   }	

					
				else	
					res.render("todoList",{Day:currentDay,newListitems:items})						
				
						
				
				
				
				
				});








/* 
// without database  code 
		 
     res.render("todoList",{Day:currentDay,newListitems:items })
     */


	})

app.post("/",function(req,res){
	
   var item=req.body.newItem
		console.log(req.body)
				

             
			if(req.body.button===date.getDate()){
                
				 	 
					workItem.push(item);
					res.redirect('/work')
			
				
				 
				
			}else{items.push(item)

			res.redirect('/')
			}
     
})
 // for work Item
app.get('/work',function(req,res){
		res.render("todoList",{Day:date.getDate(),newListitems:workItem})
	
})

app.post('/work',function(req,res){

			
})
             //for about page
			 
app.get('/about',function(req,res){
		res.render("about")
})			 




  //server start 
 
app.listen(7007,function(){
    console.log("Server is up and running at 7007");
 
})

