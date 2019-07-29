<?php

// --------------------------------
// -- While Loop
// --------------------------------

/*

The idea of the while loop is to execute a block of code until the statement has changed. 

while (expression)
{
    //code
}

*/

$readingIsFun = true;
$i = 0;   

while($readingIsFun)
{
    echo "Reading is fun!".PHP_EOL;

    $readingIsFun = false;
}

while($i < 5)
{
    echo "Reading is fun!".PHP_EOL;

    $i++;
}