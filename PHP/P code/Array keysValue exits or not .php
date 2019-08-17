<?php
     // method 1 
   /// FOR INDEX ARRAY 	 
     $authors = array("charles", "sounyadip","BEAN");
        
  
 echo array_key_exists(2,$authors);  ///array_key_exists(key value,array name) // 1

echo "<br>";


/// for associative array
   $aurthor = array(
      "quarky"=> "Charles",
	  "see its key value",
	  10=> "store",
	  "briliant"=>"Soumyadip",
       "see its key value" 
 );
  
    echo array_key_exists('briliant',$aurthor); // 1

 
 
 ?>