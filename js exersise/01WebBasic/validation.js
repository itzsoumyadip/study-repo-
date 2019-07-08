// function FromValidation(){
// const gotvalue = document.getElementById('myform').value

// if(isNaN(gotvalue)|| gotvalue <1 || gotvalue >20)
// {
//     console.log('sorry try Again');
//     const cha=document.querySelector('#ch')
//     cha.textContent='sorry try Again';

// }else{
//     console.log(' it is ok');
//     const cha=document.querySelector('#ch')
//     cha.textContent= 'it is ok';
// }

// }



// document.querySelector('button').addEventListener('click', (event) => {
//     event.target.textContent='you click me'
//     })
 
document.querySelector(".myNform").addEventListener('submit',(event) => {
  event.preventDefault();
   console.log(event.target.username.value);
   console.log(event.target.realname.value); 
    event.target.username.value='' ; 
    event.target.realname.value='' ;
    if(event.target.password.value==event.target.Cpassword.value)
    {
        console.log("its ok")
    }else{
        console.log('!!!retry')
    }
})




