<?php
     // method 1
     $author = array("charles", "Ssounyadip");
    
 
    array_push($author,"Mark twain");
 
 print_r($author);//Array ( [0] => charles [1] => Ssounyadip [2] => Mark twain )
  // method 2 
  
  $author[]="Willam";
  print_r($author);//charles [1] => Ssounyadip [2] => Mark twain [3] => Willam 
 
 
 ?>