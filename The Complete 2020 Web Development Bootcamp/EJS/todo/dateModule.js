
module.exports.getDate=getDate
/* ogject     .property:function */

// property will be access by  app .js not by function name specify here

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


/** same code with shorter version 

module.exports.getDay=function {
var today =new Date()

var option ={
    weekday:"long",
   
}
return today.toLocaleDateString("en-US",option)  



} 