const myToDo = [{
    title:'Buy Bread',
    isDone:false,
}, {
    title: 'Go to Gym',
    isDone:true,
},{
    title:'Record youtube videos',
    isDone:false,
},{ 
     title:'Take bath',
    isDone:true,

},{
    title:'have lunch',
    isDone:true,
},{
    title:'Evening nap',
    isDone:false,
}]






const notDone = myToDo.filter((todo)=> todo.isDone === false  )

 notDone.find((todo)=>console.log(todo.title))
 notDone.forEach(todo=>console.log(todo.title))
//console.log(notDone.forEach((todo)=>todo.title));  //worng 



