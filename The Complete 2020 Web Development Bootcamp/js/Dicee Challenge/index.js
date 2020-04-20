// for image 1

//random number genarator 
let randomNumber1=Math.floor(Math.random()*6)+1    //     (0-5)+1

// new image selection acording to randoma number
let newImage1="./images/dice"+randomNumber1+".png"  //(dice 1-dice 6).png

//change the dom image with newImage  (randomimage )    
document.querySelector(".img1").setAttribute("src",newImage1)



// for image 2

let randomNumber2=Math.floor(Math.random()*6)+1    //     (0-5)+1

let newImage2="./images/dice"+randomNumber2+".png"

document.querySelector(".img2").setAttribute("src",newImage2)



// who is the winner ?? 


if(randomNumber1>randomNumber2){
    let Wins=document.querySelector("body div h1")
    Wins.innerHTML="☕️ Play 1 Wins!"
    console.log("Play 1 Wins!")
    }

else if (randomNumber1<randomNumber2){
    let Wins=document.querySelector("body div h1")
    Wins.innerHTML="Play 2 Wins! ☕️"
    console.log("Player 2 Wins!")
}
else {
    let Wins=document.querySelector("body div h1")
    Wins.innerHTML="Draw! ☺️"
    console.log("Draw!")
}






/// printing image location for both 2 and 1



console.log(document.querySelector(".img2").getAttribute("src"))
console.log(newImage1)