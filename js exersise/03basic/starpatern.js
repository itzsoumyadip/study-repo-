/*
let i,j
//var j=1;
 for(i=1;i<=5;i++){
     for(j=1;j<=5;j++)
 console.log('*')
 }
 



for (var i = 1;i<=5; i++) {
    var str = "";
    for (var j =1; j <=5; j++) {
    str += "*";
       }
   console.log(str);}

*/
   let j=0,i=0;
    var str;


    for(i=1;i<=10;i++){
        
    for(j=1;j<=10;j++)
{
     if (j>=11-i)
          str =" ";
    else
         str = + "*";

    console.log(str);
    }
         
    }