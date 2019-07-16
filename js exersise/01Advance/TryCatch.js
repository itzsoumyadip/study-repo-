function currencyConverter(dollar) {
  
     if (typeof dollar==='number')
         return dollar * 70
     else {
         throw Error ('Amount need to be in number')
    }

}


try {
 const myValue =  currencyConverter('five')
 console.log(myValue)
}catch(e){
    console.log(e); 
}
 
console.log('this line run  even after crash  if try catch are use in program ')