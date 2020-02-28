function firstFun(first){  //  string hello from firstFun() will be add in this (first) parameter
    return function(second){    //string bye from secondFun will add in this parameter(second)
        return first + " " +second  //return hello + " " + string
    }
}

var secondFun = firstFun(" hello")   // this firFun()  function will return a function  and assign to the secondFun()

console.log(secondFun("bye")) // hello bye