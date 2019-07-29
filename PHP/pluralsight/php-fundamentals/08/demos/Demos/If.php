<?php

// --------------------------------
// -- If Statement
// --------------------------------

/*

This allows for conditional execution.

Think of it as a yes/no question. If it's true execute the code. If it's not true execute the code in the else section (if one is provided).

*/

$authors = ["Charles Dickens", "Jane Austin", "William Shakespeare", "Mark Twain", "Louisa May Alcott"];
$authors = [];
$count = count($authors);


if($count > 0 )
{
   echo "There is a total of ".$count." author(s).";
} 
else
{
    echo "There are no authors.";
}
