
module.exports.getDate=getDate
/* ogject     .properties:function */


function getDate(){
var today =new Date()

var option ={
    weekday:"long",
    day:"numeric",
    month:"long",
    year:"numeric"
}
var currentDate=today.toLocaleDateString("en-US",option)  

return currentDate

}




module.exports.getDay=getDay

function getDay(){
var today =new Date()

var option ={
    weekday:"long",
   
}
return today.toLocaleDateString("en-US",option)  



}