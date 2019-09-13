const questions =[
    {
        question: "What is 10 + 10?",
        options: ["8", "20", "28", "30"],
        answer: "20"
    },
  
        {
            question: "What is Athena's favorite animal?",
            options: ["jellyfish", "penguins", "otters"],
            answer: "otters"
        }
     
    

];

let question_number = 0;
let correct = 0;
 
document.addEventListener("DOMContentLoaded", () => {
    load_question();
     let button=document.createElement("button");
        button.textContent= Next;
      let hw =document.getElementById("bottom")
         hw.innerHTML=sala;    
     //bottom.innerHTML="<button>NEXT"   
});
 
function load_question() {
    document.querySelector("#question").innerHTML = questions[question_number].question;
    const options=document.getElementById("options");
    options.innerHTML=" ";
    questions[question_number].options.forEach(option => {
    options.innerHTML +=`<button class="buttons"> ${option}`;
    
    
    });
      
}
