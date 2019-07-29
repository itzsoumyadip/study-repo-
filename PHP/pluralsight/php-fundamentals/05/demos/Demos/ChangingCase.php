<?php

// --------------------------------
// -- Changing Case
// --------------------------------


/*
Changes all the characters to be uppercase or all lowercase
These functions each take one parameter. 
1. String that will have it's case changed.
*/


$quote = "To be or not to be, that is the question.";

$quote = strtoupper($quote);

//$quote = strtolower($quote);

echo $quote;

/*
Please note that the function returns a value that must 
be either saved to a variable or printed out directly.
*/