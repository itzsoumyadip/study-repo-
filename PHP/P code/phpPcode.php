<?php
   define ("W","Welcome to php");
echo "<H1>".W."</H1>";
$foo ="5";
$foo1 =25;
$sfoo="5+25=";
echo "sum is using + = ". $sfoo,$foo+$foo1."<BR>";//sum is using + = 5+25=30
echo "sum is using (.) operator= ". "5 . 25=",$foo.$foo1."<BR>";//sum is using (.) operator= 5 . 25=525
echo "$sfoo=";
var_dump($sfoo);//5+25==string(5) "5+25=" 
echo "<BR>";
echo "$foo=";
var_dump($foo);//5=string(1) "5" 
echo "<BR>";
echo "$foo1=";
var_dump($foo1); //25=int(25) 
echo "<BR>".is_int($foo1); // 1
echo "<BR>";
var_dump ((bool)$foo); //bool(true)
?>