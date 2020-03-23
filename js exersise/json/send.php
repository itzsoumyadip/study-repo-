<?php

if(isset($_GET['values']) && !empty($_GET['values']) ){

    $showdata = json_decode($_GET['values']);

    #the object operator, -> is used in object scope to access methods and properties of an object

     // printing 
    echo $showdata->name;   // $showdata treted as  object 

    echo "<BR>";
  
  // loop for printing
    foreach($showdata as $key=>$val ){  // convert as key value pair
    echo $key.":-". $val ."<BR>";
    }
}




?>