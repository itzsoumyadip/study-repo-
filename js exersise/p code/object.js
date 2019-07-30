/// types of object declaration in javascript 





var o = new Object()         
o.firstName = " iama_coder"
o.lastName = "soudip"
o.student = true
o.age   = 20
o.greet =function(){ console.log('hellow ');}

console.log(JSON.stringify(o));

 ///  objects literals 

var o2= {};

o2["firstName"]= "Jon" //same as dot dotantion 
var a = "lastName"   /// 
o2[a]="Doe"    //  

console.log(JSON.stringify(o2));


// another way  for object declaration

let  o3 ={
  firstName:"Jane", 
  lastName:"Doe",
  age : 19,
  greet : function(r){
        this.age = this.age+r  
        console.log(this.age) 
     }
 }

function fun(){


}


console.log(JSON.stringify(o3));
o3.greet(2)       // function to add in  age properties 



//// object inside another object    =>> infinitely recursive   //// json object within another json object   


let  o4 ={
    firstName:"Jane", 
    lastName:"Doe",
    age : 19,
    greet : function(r){
          this.age = this.age+r  
          console.log(this.age) 
       },
    
       address : {
         street: "welingtion ", 
         pincode: 23,
       
        }  
   };
  

   console.log(JSON.stringify(o4));
