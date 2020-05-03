

/*
 we've required and incorporated Express into our file,
*/
const express=require('express')





/*

the next step is to create

a new constant called app, and this is simply a function that represents the Express module, and we bind

that to the word app.
*/

const app =express();





app.get("/",function(requests,response){
    response.send("<h1>Hello world</h1>")
})


app.get("/about",function(requests,response){
    response.send("<h1>Soumyadip Saha</h1><p>developer coder son </p>  ")
})






/*

methods called listen.

And this tells it to listen on a specific port for any HTTP requests that get sent to our server.

*/
/* here  I'm going to choose the port 3000, and if we hit save, */
// server building  

//app.listen(3000)  // our server is tuned to port 3000

app.listen(2000,function(){
    console.log("server has started at port 2000");  // this call back function will give a msg to terminal
    
})


/* now if we heed over and open localhost:3000 on browser 

“Cannot GET /“.

Now what does that mean?

Well, it means that when our browser is trying to get in touch with our server on the port 3000, it's
not able to get anything back.

*/



