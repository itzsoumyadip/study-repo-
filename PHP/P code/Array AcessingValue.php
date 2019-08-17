<?php
     // method 1 
   /// FOR INDEX ARRAY 	 
     $authors = array("charles", "sounyadip","BEAN");
        
  
 echo $authors[1];  /// sounyadip

echo "<br>";


/// for associative array
   $aurthor = array(
      "quarky"=> "Charles",
	  "see its key value",
	  10=> "store",
	  "briliant"=>"Soumyadip",
       "see its key value" 
 );
  
    echo $aurthor['quarky']; // $aurthor['keyvalue'] // output ->>Charles

 
 
 ?>