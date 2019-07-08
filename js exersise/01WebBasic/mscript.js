//  const myElement= document.querySelectorAll('p')
//  console.log(myElement);

// const myElement=document.querySelectorAll('h1')
// myElement.forEach((p)=>p.textContent='heading change by arrow function by looping')


const newPara=document.createElement('p')
newPara.textContent='I was add by js and new'
document.querySelector('body').appendChild(newPara)


