function lifeInWeeks(age) {
    
/************Don't change the code above************/    
    
    //Write your code here.
    
// total days, month & week in 90years
var TD=90*365
var TM=90*12
var TW=90*52

// total days, month & week in of the given person now 
var UD=age*365
var UM=age*12
var UW=age*52

console.log(`You have ${TD-UD} days, ${TW-UW} weeks, and ${TM-UM} months left.`)    
    
    
    
/*************Don't change the code below**********/
}

//var day=365,month=12,week=52

lifeInWeeks(51)

