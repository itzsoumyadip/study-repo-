<?php

// --------------------------------
// -- For Loop
// --------------------------------

/*

Syntax of the for loop

for (expr1; expr2; expr3)
{
    //code
}

The first expression is executed once at the beginning of the loop. Most of the time this is a value set to zero.
The second expression is a conditional statement, which is evaluated at the beginning of the loop for every iteration. If the expression is true then the code inside the brackets is executed.
The third expression executes at the end of each of the loops iterations.


*/

for($i = 1; $i <= 5; $i++)
{
    echo "Reading is fun!".PHP_EOL;
}

// Other examples ---- 
$authors = ["Charles Dickens", "Jane Austin", "William Shakespeare"];

for($i = 0; $i < count($authors); $i++)
{
    echo $authors[$i].PHP_EOL;
}

for($i = 0, $authCount = count($authors); $i < $authCount; $i++)
{
    echo $authors[$i].PHP_EOL;
}
