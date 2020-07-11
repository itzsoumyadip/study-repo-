const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true, useUnifiedTopology: true}); // CONNECTION WITH MONGODB SERVER

const fruitSchema=new mongoose.Schema({ 
    _id:{            // making and _id object  for validation 
        type:Number,
        required:[true,"Please check your data entry,no _id specified"]
    },
    name:String,
    rating:{
        type:Number,
        min:1,       // minimum value req
        max:10,       // max value req 
    },
    review:String
});

const Fruit =mongoose.model("Fruit", fruitSchema);     // name of the collection (mongoose take singular form and convert in prular), /// a new collection created " fruits " (it use lowdash to lowercase) with the Schema of Fruitschema 

const fruit=new Fruit({  // creating a object  document , it will insert in database, (row(mysql term ))  from the model 
    _id:2,
    name:"Apple",
    rating:7,
    review:"Pretty solid as a Fruit."
});

//fruit.save(); // save the  document in the database

const personSchema=new mongoose.Schema({
  
    name:String,
    age:Number    
});

const Person=mongoose.model("Person",personSchema);

const person=new Person({
    _id:1,
    name:"Soumyadip",
    age:20
});


//person.save();

// bulk data  adding in database 

const  orange = new Fruit({
    _id:3,
    name:"Orange",
    score:3,
    review:"to much"

})

const  banana = new Fruit({
    _id:4,
    name:"Banana",
    score:6,
    review:"Hmm"

})
const kiwi = new Fruit({
    _id:5,
    name:"Kiwi",
    score:1,
    review:"YWAK"

});

const Peach = new Fruit({
    _id:6,
    name:"pitch",
    rating:6,
    review:"so yummy!"

});
//Pich.save();



/* Fruit.insertMany([banana,kiwi],function(err){
    if(err){
        console.log(err)
    }else{
        console.log("Successfuly inserted in MongoDB")
    }
}) */

//     printing data form mongo server with the help of mongoose

 Fruit.find(function(err,fruits){ // error and fruits array (return collection  )
    mongoose.connection.close();     // disconnect the mongodb
     fruits.forEach(function(fruit){             // for each fruits array 
         console.log(fruit.name)
     });

    
 })

/* 
 Mango
 Apple
 Orange
 Kiwi
 Peach
 */ 

   

// update the document 


Fruit.updateOne({_id:3},{rating:3},function(err){
    if(err)
        console.log(err)
    else
        console.log("Succesfully updated the document");
            
})

// we also can add new coloum wit update one  method 

// delete one

Fruit.deleteOne({_id:4},function(err){
    if(err)
        console.log(err)
    else
        console.log("Succesfully deleted the document");
            
})


// delete Many 
const john=new Person({      
 
    name:"John",
    age:45
});
//john.save();

Person.deleteMany({name:"John"},(err)=>{
    if(err)
        console.log(err);
    else
        console.log("Succesfully deleted ALl data related to John");
            
        
});


Person.find((err,people)=>{
    people.forEach((person)=>console.log(person.name));
    
})



