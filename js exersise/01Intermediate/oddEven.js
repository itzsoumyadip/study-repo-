let a = [10,20,34,45,56,6,8,5,3,2,3]


//let  a =Math.floor(Math.random() * 5)
// console.log(a);
 

//      for(let i=0;i<a.length;i++){ 
    
  
//   if((a[i]%2)==0){
//         console.log(a[i])
//          console.log('even');
//     }
//        else{
//         console.log(a[i])
//           console.log('odd');
//       } 
   
//     }



/* dont know why not working ????

let c=0,b=0

const cs =a.forEach(function(a,i){
      if((a[i]%2)==0){
         c=1
         b=0
         return c ;
          }
             else{
                 c=0
                 b=1
              return b
            } 
            return "c" + "a"
            })
        
        
    console.log(cs);
    

//// end here */



for(let i=0;i<a.length;i++){
   var check = (a[i]%2==0)?"even":"odd"
   console.log(`${a[i]} is ${check} `)
}
