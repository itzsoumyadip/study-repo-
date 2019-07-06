// const myToDos =['Buy Bread','Go to gym','Record youtube videos ']
// console.log(myToDos.indexOf('Buy Bread'))

const newToDos =[{
    title:'Buy Bread',
    isDone:false,
}, {
    title: 'Go to Gym',
    isDone:false,
},{
    title:'Record youtube videos',
    isDone:false,
} ]
//Method to find index
const index = newToDos.findIndex(function(todo,index){
  console.log(todo);
  
    return todo.title=== 'Go to Gym'

})
console.log(index)

// Method type 1 to Find value that has been pass as a title  with help of findindex

//   function  myToDos(anyTodo,title){
//    const indexs = anyTodo.findIndex(function(todo,index){
//     console.log(` ${index+1} ${todo.title} ------    ${index}`);
//     return  todo.title.toLowerCase() === title.toLowerCase()

      
//    }) 
//    return anyTodo[indexs]

//   }
// const print = myToDos(newToDos,'Record Youtube Videos')
// console.log(print)


// Method type 2 to Find value that has been pass as a title  with help of find

// function  myToDos(anyTodo,title){
//        const indexs = anyTodo.find(function(todo,index){
//         console.log(` ${index+1} ${todo.title} ------    ${index}`);
//         return  todo.title.toLowerCase() === title.toLowerCase()
//         }) 
//        return indexs
    
//       }
//     const print = myToDos(newToDos,'Record Youtube Videos')
//     console.log(print)












