/* where we learn about map and for of loops   

  read comments to understand it 
  and se lecture Map and for of loop lec no 30

*/


//for of loop 



var john={
    name:'I am john',
    age:24,
    isActive:true
}
var marry = {
     name: 'I am marry',
     age: 23,
     isActive:true
}
var sam={
   name:'I am Sam',
   age:29,
   isActive:false
}


let user = new Map()  /// we can use map to push data into it 
user.set('john',john)  // .set = is property ==>> user.set(key,value)//  here 'john'(key) is programer mdae up and (john(value)) is comming up from user or variable . || it means data
user.set('marry',marry)
user.set('sam',sam)


//console.log(user);  returns map , map always return iterable ..iterable => means something which can iterable  

//console.log(user.size)  // return the size of 

//console.log(user.get('sam')); /// .get(key)

//console.log(user.keys()); //retuerns keys on which we can iteret (can do looping)
//console.log(user.values());//retuerns  values on which we can iteret (can do looping)

/*  loping through keys with FOR /of
for (const key of user.keys()) {     // user.keys()  all iterable and =>>key <== will go to each key  of it 
 console.log(key) // prints the key on user   
    
}
*/


/*  loping through values
for (const value of user.values()) {     // user.values() return  all iterable and =>>value <== will go to each  value of it 
 console.log(value)   
    
}
*/


/*  loping through keys and vakues both 
for (const [key,value] of user.entries()) {  // .entries return key amd values pairs and [key,value] iterate through it   
 console.log(key + " = " + value.name );   
    
}
*/


/*
 same things with for each loop 

user.forEach((value,key)=> console.log(key + " = " + value.name )  )  // return same above [key,value] as loop


// *** xxxxxxx **   user.forEach((key,value)=> console.log(key + " = " + value.name )  )// wrong way return undefined   **  ***  ***xxxxxx  *** * *
*/

/* with array of array 
var arrfArr =[['one','1'],['two','2'],['three',3]]

var newMap= new Map(arrfArr) //// automaticaly makes  this =>keys value <=   from array of array   
console.log(newMap);

//  loping through keys and vakues both 
for (const [key,value] of newMap.entries())
console.log(key + '=' + value)

*/
 
/*    **************  example of keys and value  that are use in map



       key           | value
      'john'         | john
       'marry'       |marry
      'sam'          | sam
   (here key         |   (value can be givven or taken from user)
 is string value)    |
    
    


*/




