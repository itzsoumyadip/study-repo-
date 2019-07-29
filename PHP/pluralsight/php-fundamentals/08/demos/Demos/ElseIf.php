<?php

// --------------------------------
// -- Else If
// --------------------------------

/*

You can have an additional conditional check by extending the if statement to include the elseif. 

Please keep in mind that whatever conditional check returns true first will be executed.

*/

$authors = ["Charles Dickens", "Jane Austin", "William Shakespeare", "Mark Twain", "Louisa May Alcott"];
//$authors = ["Charles Dickens"];
//$authors = [];

$count = count($authors);


if($count == 1)
{
   echo "There is 1 author.";
} 
elseif($count > 1 ) 
{
   echo "There is a total of ".$count." authors.";
} 
else
{
    echo "There are no authors.";
}
