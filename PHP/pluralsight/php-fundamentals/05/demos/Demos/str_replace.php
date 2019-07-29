<?php

// --------------------------------
// -- str_replace()
// --------------------------------

/*
This function will replace certain occurances in a string with the new value that is wanted.

This function takes three parameters, with an optional fourth: 
1. The value you are looking for in the string
2. The value you would like to replace with the value you are looking for
3. The string value you would like to search in.
*/

$quote = "To be or not to be? That is the question.";

$replaced = str_replace("be", "know", $quote, $replacementCount);

echo $replaced;
echo $replacementCount;

/*
Please note that the function returns a value that must 
be either saved to a variable or printed out directly.
*/