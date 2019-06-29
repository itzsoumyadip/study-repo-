let string = '123'

function sum(val1,val2=0) {   /// val1 must me pass as string and val2 as integer
   let  value = Number(val1)+val2  
 
   return value
}

// function sum(val1,val2,val3){
//      let value = val1+val2+val3
//      return value
//     }


 console.log(sum(string,12));
 //console.log(sum(string,12,0));



