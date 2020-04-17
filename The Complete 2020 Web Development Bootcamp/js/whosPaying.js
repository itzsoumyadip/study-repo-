function whosPaying(names) {
    
/******Don't change the code above*******/
    
    //Write your code here.
    // pick a random people       
    let random=Math.floor(Math.random() * names.length)
 
    return `${names[random]} is going to buy lunch today !`



/******Don't change the code below*******/    
}
 let   name=["Angela","Ben","Jenny","Michael","Chole"]
  
    
for(let i=0;i<=20;i++)
console.log(whosPaying(name))