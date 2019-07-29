<?php

// --------------------------------
// -- str_split()
// --------------------------------

/*
This function will split up a string by character and store it to an array. It also has the option to split up a string by character count.


This function takes one parameter, with an optional second parament: 
1. The string you wish to split
2. Optional: The string chunks you wish to create on the split
*/


$quote = "It is a melancholy truth that even great men have their poor relations.";

$quote = str_split($quote, 8);

print_r($quote);

/*
Please note that the function returns a value that must 
be either saved to a variable or printed out directly.
*/