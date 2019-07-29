<?php

// --------------------------------
// -- Ternary
// --------------------------------

/*

(expression) ? result1 : result2

The expression ------ (expression) ? result1 : result2 ----- evaluates to result1 
if expression evaluates to TRUE, and result2 if expression evaluates to FALSE. 

*/

$authors = ["Charles Dickens", "Jane Austin", "William Shakespeare", "Mark Twain", "Louisa May Alcott"];
$count = count($authors);

/*
if($count > 0 )
{
   echo "There is a total of ".$count." author(s)."; 
} 
else
{
    echo "There are no authors.";
}
*/

$outcome = ($count > 0) ? "Author Total: ".$count : "No Authors.";
echo $outcome;