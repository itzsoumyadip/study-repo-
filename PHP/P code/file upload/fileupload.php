<?php
// if(isset($_FILES["im"])){
// $user=$_POST['username'];
$f = $_FILES["im"];
echo "file name:".$f['name'];

// if(isset($f)){
move_uploaded_file($f['tmp_name'],"upload/".$f['name']);
// }
// else{
    // echo "not set"; 
// }

 print_r($_FILES); //file name:finger type.JPGArray ( [im] => Array ( [name] => finger type.JPG [type] => image/jpeg [tmp_name] => C:\xampp\tmp\phpB6F.tmp [error] => 0 [size] => 58468 ) )
// echo $user;
//  }
//  else {
//  echo "hot";
//  }
?>
