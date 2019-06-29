let myToDo ={
    day:'Monday',
    meetings:0,
    meetDone:0,
}
function addMeeting(todo,meet=0) {
    todo.meetings = todo.meetings + meet
}

function meetDone(todo,meet=0){
    todo.meetDone = todo.meetDone - meet 
}

function resetDay(todo){
    todo.meetings =0
    todo.meetDone=0
}
function getSummaryOfDay(todo){
   let meetLeft= todo.meetings + todo.meetDone
 
   return `you have ${meetLeft} meetings today`
}


addMeeting(myToDo,4)
addMeeting(myToDo,2)
meetDone(myToDo,5)

console.log(myToDo);

console.log(getSummaryOfDay(myToDo));
resetDay(myToDo)
//console.log(`it SAT so your meeting is reset ${myToDo.meetings && myToDo.meetDone } `); //want to print like this console.log(meToDo) whith remanimg sentence
console.log('it SAT so your meeting is reset')
console.log(myToDo)