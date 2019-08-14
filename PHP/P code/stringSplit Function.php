<?php
   
   $quote = "only those";
  $varArray = str_split($quote);
 print_r($varArray);  //Array ( [0] => o [1] => n [2] => l [3] => y [4] => [5] => t [6] => h [7] => o [8] => s [9] => e )
echo "<br>";   
// now with 2 argument 

      $quote = "only those";
  $varArray = str_split($quote,3);

    print_r($varArray);//Array ( [0] => onl [1] => y t [2] => hos [3] => e )
     
   
?>