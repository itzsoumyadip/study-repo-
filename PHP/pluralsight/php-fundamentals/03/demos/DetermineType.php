<?php

// --------------------------------
// -- Determine Types of Variables
// --------------------------------

define('CHECK_CONSTANT', "Yes, I am a constant!");

$intVar = 1234;
$stringVar = "I'm a String";
$boolVar = false;
$floatVar = 12.34;

/*

Built in functions used...

is_int($var);
is_bool($var);
is_string($var);
is_float($var);

defined('CONSTANT_NAME');


*/


print "All return TRUE --------------------------\n\n";

echo is_bool($boolVar);  echo "\n";

echo is_string($stringVar);  echo "\n";

echo is_float($floatVar);  echo "\n";

echo is_int($intVar);  echo "\n";

echo defined('CHECK_CONSTANT');  echo "\n\n";

print "All return FALSE -------------------------\n\n";

echo is_bool($intVar);  echo "\n";

echo is_string($boolVar);  echo "\n";

echo is_float($stringVar);  echo "\n";

echo is_int($floatVar);  echo "\n";

echo defined('NOT_CONSTANT');  echo "\n";

// ------------------------ Example use in an if statement

if(is_int($intVar))
{
    echo "Totally an integer";
}
else
{
    echo "Not an Integer";    
}