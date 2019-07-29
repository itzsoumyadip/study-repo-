<?php

// --------------------------------
// -- substr()
// --------------------------------

/*
This function will take a string and create a sub string from the specific locations you provide.

This function takes two parameters, with an option for a third.
1. String to be manipulated
2. Starting location of substring. (0 is the beginning)
3. Optional: How many characters you want to take.
*/

$quote = "Only those who will risk going too far can possibly find out how far one can go.";

//echo substr($quote, 4); # starts at character location 4 and takes the rest of the string.
//echo substr($quote, -4); # takes the 4 characters from the end.
//echo substr($quote, 0, -5); # starts at the beginning and goes till 5 from the end
echo substr($quote, 3, 2); # starts 3 character in and grabs 2 characters from that spot

/*
Please note that the function returns a value that must 
be either saved to a variable or printed out directly.
*/