/***  asociative array */


localStorage.setItem('hero','thor')   //saves value in local storage   and stay there untill clear storage is hit
localStorage.setItem('todo','buy ice tea') 
const item =localStorage.getItem('todo')  // get the value of key   from storage

const  ritem=localStorage.removeItem('todo') // delete the individula key value from storage

localStorage.clear() /// delete all storage item