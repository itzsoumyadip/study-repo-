
// modules import
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const date= require(__dirname +'/dateModule.js')

console.log(date)


// using them with express 

const app=express();

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

var items=[2,3,5,5]
var workItem=[2,3]


app.get('/',function(req,res){


  
         let currentDate=date.getDay()  // calling the function that are define in module dateModule
		 
     res.render("todoList",{Day:currentDate,newListitems:items })
    
})

app.post("/",function(req,res){
	
   var item=req.body.newItem
		console.log(req.body)
				

             
			if(req.body.button==="work list"){
                
				 	 
					workItem.push(item);
					res.redirect('/work')
			
				
				 
				
			}else{items.push(item)

			res.redirect('/')
			}
     
})
 // for work Item
app.get('/work',function(req,res){
		res.render("todoList",{Day:"work list",newListitems:workItem})
	
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

