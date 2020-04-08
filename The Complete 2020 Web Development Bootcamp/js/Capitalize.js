// take the name from user
var name=prompt("Hi what is your name?")

// a Turn the first Char to upper case 

var fisrtChar=name[0]
fisrtChar=fisrtChar.toUpperCase()

// b  Turn the rest of the char to lower case 
var lastname=name.slice(1,name.length)
lastname=lastname.toLowerCase()

// c   Concatinate the both upper and lower  char to one
console.log("Hey "+fisrtChar+lastname)
