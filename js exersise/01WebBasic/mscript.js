
//  const myElement= document.querySelectorAll('p')
//  console.log(myElement);

// change all the h1 tag text
// const myElement=document.querySelectorAll('h1')
// myElement.forEach((p)=>p.textContent='heading change by arrow function by looping')

//append  new text at the end of p tag text
const newPara=document.createElement('p')
newPara.textContent='I was add by js and new'
document.querySelector('body').appendChild(newPara)


