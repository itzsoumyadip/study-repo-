/// bubble sort 
// main()

// function main(){


let  a =[]
   a= [4,3,1,2]



//bubble(a,11)


//}



//function bubble(A,b){
 
    for(let round=1;round<=4-1;round++)
    {   
        let flag = 0
        for(let i =0; i<=4-1-round;i++){
               if(a[i]>a[i+1]){
                     flag=1
                     console.log("a[i+1]" +" " + a[i+1])
                let temp = a[i+i]
                 console.log('temp'+ ' '+ temp );
                 
                     a[i+1]=a[i]
                     a[i]=temp
                     console.log("a[i] and a[i+1] =" + a[i] +" "+ a[i] + "temp"+ temp);
                     
            }
            console.log(' her ' + flag)
             if( flag === 0){
             console.log("total no of round = " + flag);
             
         }
         }

   

        }
 
    for(let J=0;J<=a.length;J++){
        console.log(a[J]) 

}

//}










// let bubble =function(var a[],var b) {


// }







