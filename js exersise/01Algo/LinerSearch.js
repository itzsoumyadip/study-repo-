sq_search([79,26,45,54,56,22,14,46,20,12,12,],12)

function sq_search(arr,ITEM)
{
     var flag=1
   for(var i=0;i<=arr.length-1;i++){
   if(arr[i]==ITEM)   
    {  console.log(`value of ${ITEM} is found at ${i+1} position `);
    
       flag=0;
      
    }
   }
  if (flag==1){
      console.log(`${ITEM} is not found int the array`)
    
  }   

}


