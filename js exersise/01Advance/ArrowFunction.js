/// normal function
console.log("normal function ") 
 const name = function(name){
   return `Hi!! ${name }  good morning !`;
 }
console.log(name('soumyadip'))
    
console.log("Arrow function type 1");

 const Aname = (name)=> {
      return `Hi!! ${name }  good evening !`
 }
console.log(Aname('soumyadip'));

console.log("Arrow function type 2");

 const AAname = (name)=>  `Hi!! ${name }  good night !`
console.log(AAname('soumyadip'));

//// => arrow function does not work properly at  methods specially with this 
//eg 
// 
/* {
const Camera={
      title:"MY CAMMERA cannon ",
      price:600,
      whatPrice: () => {                              //insted of whatPrice: function(){
        return `this cannon camera price is ${this.price}$`
      },

} 
console.log("price of cammera"+" " + (Camera.whatPrice()))

} */

//outpuut of price will be undefined 

// in redux use 
// const  func =()=> ({key:"value"})



