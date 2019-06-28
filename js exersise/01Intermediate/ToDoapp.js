// ToDo app 

const task =[]

 task.push('gym')
 task.push('brush')
 task.push('baths')

// task.forEach(function(task,index) {
//     console.log(`your task ${index+1} is :-- ${task}`);
    
// })
 
// With for loop 
for(let index=0; index<=task.length-1;index++){
    console.log(`your task ${index+1} is :-- ${task[index]}`) /// only effect on  ${index+1} not change(incremmernt)  on main index
}