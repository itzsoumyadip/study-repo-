
function plays(){
    {  
      
      makesound(this.innerHTML)
     playAnimation(this.innerHTML)
}

// for keyboard event 
// event is attacth with object document of dom  not with specific object
document.addEventListener('keydown',function(event){
    makesound(event.key)
    playAnimation(event.key)
})






// makesound function 

function makesound(key){


    console.log(key);
    
    switch (key) {
            case "w":
                let tom1=new Audio('sounds/tom-1.mp3')
                tom1.play()                
                break;
            case "a":
            let tom2=new Audio('sounds/tom-2.mp3')
                 tom2.play()                
                 break;
            case "s":
                let tom3=new Audio('sounds/tom-3.mp3')
                tom3.play()                
                break;
             case "d":
                let tom4=new Audio('sounds/tom-4.mp3')
                tom4.play()                
                break;
            case "j":
                let crash =new Audio('sounds/crash.mp3')
                crash.play()                
                break;
            case "k":
                let kick =new Audio('sounds/kick-bass.mp3')
                kick.play()                
                break;    
            case "l":
                let snare =new Audio('sounds/snare.mp3')
                snare.play()                
                break;




        default:
            alert("worng key press");
            
            break;
    }


}
    


}

function playAnimation(key) {
 document.querySelector("."+key).classList.add("pressed")

 setTimeout(function(){
    document.querySelector("."+key).classList.remove("pressed")
     
 },100)
    
}





/// for mouse click event 




// adding event listner  to all drum class by for loop
for(let i=0;i<document.querySelectorAll(".drum").length;i++){
    // adding event listner to drum class
   
    document.querySelectorAll(".drum")[i].addEventListener("click",plays)                        
    // normal function(){alert("I am clicked")
  
    


}





