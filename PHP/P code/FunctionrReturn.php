<?php
  
  function autthor ($aurtorName,$date=1930){
      echo $date;
      echo "<Br>";
      echo  $aurtorName;
      
  }
  
  
  
  function getAuthor(){
      
      return "soumyadip";
  }
  
  
  
  $aurthur =getAuthor();
  autthor( $aurthur);
  
  ?>