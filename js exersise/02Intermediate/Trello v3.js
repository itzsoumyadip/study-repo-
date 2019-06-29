let myToDo ={
    day:'Monday',
    meetings:0,
    meetDone:0,
    addMeeting:function(meet=0){
       this.meetings = this.meetings + meet
       console.log(this.meetings);
       
    }, 

    meetDones:function (meet=0){
        this.meetDone = this.meetDone +meet
        console.log(this.meetDone);
        
     },
    resetDay: function (){
        this.meetings =0
        this.meetDone=0
     },
    getSummaryOfDay: function(){
        let meetLeft= this.meetings - this.meetDone
      
        return `you have ${meetLeft} meetings today`
     },
     
}
myToDo.addMeeting(4)
myToDo.addMeeting(2)
myToDo.meetDones(5)
console.log(myToDo.getSummaryOfDay());
//console.log(myToDo);
