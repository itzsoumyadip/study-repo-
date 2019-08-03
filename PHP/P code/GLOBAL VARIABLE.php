<?php
  
echo "<CENTER></H1>GLOBAL VARIABLE</H1></CENTER>";
  $aurthur ="OUTSIDE VARIABLE"; 
  
  
  function getAuthor(){
      
      
      
      global  $aurthur;
      $aurthur="INSIDE VARIABLE";
  }
  
  
  
  getAuthor();
 echo  $aurthur;///OUTPUT >>>>>>INSIDE VARIABLE 
  
  ?>