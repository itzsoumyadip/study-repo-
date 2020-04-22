let FizzBuzz=[]
let i=0

fizzBuzz=()=>{
        console.log("FizzBuzz ")
        while(i<=100){
            
            if(i%3==0 && i%5==0){
                FizzBuzz.push("fizzBuzz");             
            }
            else if(i%3==0){
                FizzBuzz.push("fizz")
                }
            else if(i%5==0){
                FizzBuzz.push("Buzz")
            }     
            else{
               FizzBuzz.push(i)
            }

           i++
        }




}
fizzBuzz()
console.log(FizzBuzz)
