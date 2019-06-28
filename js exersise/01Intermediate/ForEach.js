

console.log("For each loop with function callback ");

const days=['MON','TUE','WED','THU','FRI','SAT']

days.forEach(function(tiger,index){   //function(tiger,index) is a call back function       

   console.log(`YOR ToDo for  ${index+1}  :-- ${tiger}`);
})  



console.log("For each loop with external function ");

//const days=['MON','TUE','WED','THU','FRI','SAT']

function ToDo() {

    console.log(`YOR ToDo for :-- `); 
} 

days.forEach(ToDo)

   
 
