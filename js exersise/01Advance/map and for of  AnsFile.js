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

/*  loping through keys with FOR /of */
// for (const key of user.keys()) {     // user.keys()  all iterable and =>>key <== will go to each key  of it 
//     console.log(key) // prints the key on user   
//                  /* output is 
//                     john
//                     marry
//                     sam
//                     */
// }


/*  loping through values*/
for (const value of user.values()) {     // user.values() return  all iterable and =>>value <== will go to each  value of it 
 console.log(value)   
      /*{ name: 'I am john', age: 24, isActive: true }
        { name: 'I am marry', age: 23, isActive: true }
        { name: 'I am Sam', age: 29, isActive: false }
        */
}
