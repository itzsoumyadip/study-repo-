const student = {
    name :'John',
    age: 23,
    isActive: true
}

// convert JSON object into string tp be store in local storage 
 const studentObjectToString= JSON.stringify(student)  //  stringify-->> convert object to string
  
 console.log(typeof studentObjectToString)
 localStorage.setItem('student','studentObjectToString')

 
const toJsonStudent=JSON.parse(studentObjectToString);   // convert to string to json object

console.log(typeof toJsonStudent)

/************************** */
// explpore why i can not change (by const toJsonStudent=JSON.parse(data))the string to object by getting files from local stroage
// const data =localStorage.getItem('student')  
// const toJsonStudents=JSON.parse(data);   // convert to string to json object
// console.log(toJsonStudents);


f