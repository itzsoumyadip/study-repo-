<?php

// --------------------------------
// -- Variable Functions
// --------------------------------

/*
You can have a string name and save it to a variable. Then use that variable to call a function. Mind Blown!
*/


function getAuthor()
{
    echo "Charles Dickens";
}

$variableFunctionName = "getAuthor"; # string name is actually a function call

$variableFunctionName();  # variable holds the string value of the function name. Adding the () allows you to call it.