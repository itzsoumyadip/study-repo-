let gameStart=false    //initial state is false


// game lable 
var level =0

var buttonColours=["red", "blue", "green", "yellow"]

// ramdom machine generate pattern store in memory
var gamePattern=[]
// ramdom user clikc pattern  in memory store
var userClickedPattern=[]



function nextSequence(){

    userClickedPattern = [];  // so that user have to click button from beginning to last in sequence
    // level of the game
    $("#level-title").text("Level  "+level)
    level++
    // random number generate
    let  randomNumber= Math.floor((Math.random()*4))
   
   // random color selcect form array using random numbre
    var randomChosenColour= buttonColours[randomNumber]
   
    
        // audio 
        playSound(randomChosenColour)
        
  
    //    let ColorId="#"+randomChosenColour;
     
   $("#"+randomChosenColour).fadeTo(100, 0.3, function() { $(this).fadeTo(100, 1.0); })

   console.log(randomNumber, randomChosenColour)
 


    // saving the random color into memory 
    gamePattern.push(randomChosenColour)
}







// listining the mouse click 
$(".btn").click(function(){


            var  userChosenColor=$(this).attr("id")   // or  this.id 
        
            userClickedPattern.push(userChosenColor)

           

            playSound(userChosenColor)
            animatePress(userChosenColor)
        
            checkAnswer((userClickedPattern.length)-1)
        
         //   console.log(userChosenColor)
            

           
})

// user patter Check or squence of enter pattern check
function checkAnswer(currentLevel){
   
        //function run every times user click on button     

        /*
         currentLevel == index  of the last user entry taken 
         so this function match each input of the user with coputer input 
         because userClikPattern erase every time computer enter's a pattern
         so this function will not call nextSequene() until user complete the whole pattern once again               

         once pattern is match and complete the hole pattern nextSequence will be call, and angin this function will run upon button click  from the beginning 
     
         */
        console.log("outside",gamePattern,userClickedPattern)

            if(gamePattern[currentLevel]!=userClickedPattern[currentLevel]){
                 
                // this blocks runs if user enter wrong button at 
                console.log("wrong")
                
                // audio for worong   button 
                let WAudio=new Audio("sounds/wrong.mp3")
                WAudio.play()
               
                // animation adding red screen to body
                $("body").addClass("game-over")

                setTimeout(()=>$("body").removeClass("game-over"),200)
                
                StartOver()
                
            }
            else{
             
            console.log("ok")
              
            
                    if(gamePattern.length==userClickedPattern.length){
                           
                        // only runs when we finish the squence of button click that is when computer pattern  length == user click pattern length 
                        console.log("same length")
                        
                            setTimeout(function(){
                                
                                nextSequence()
                              
                            },1000 )
                        
                        
                        }
                     else{
                         // if user enter right value and sequence is not complete this will run 
                         console.log("continue")
                     }   
            }
       
            
}


function StartOver() {

            // erase the user and computer store pattern 
              userClickedPattern=[]
              gamePattern=[]
              // stop game 
              gameStart=false
              // start game from begenning
              level=0
              $("h1").text("Game Over,Press A Key to Start")  // restore the text



}   
    
            

 




// play music for 

function playSound(name){
    let song="sounds/"+name+".mp3"
    let audios=new Audio(song)
    audios.play()

}


// animation button for usr 
function animatePress(currentColour){

    $("#"+currentColour).addClass("pressed")

    // remove the animation after 100ms
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed")
    },100)

}






//start the game by pressing any key on key board

$("html").keydown(function(){
   
    if(!gameStart){
        nextSequence()
      
        gameStart=true
    }
    else{
        gameStart=true
    }

   
    

    console.log("i am pressed");
    
})

























// for (let i = 0; i < 20; i++){ 
    
//     setTimeout(function() { 
//         nextSequence() 
//     }, 2000 *i )
// //    console.log(gamePattern);
   
// }
 

