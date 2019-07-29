<?php

// --------------------------------
// -- strpos()
// --------------------------------

/*
This dtermines if there is a character or string of characters that exists inside of a string. 

This function takes two parameters, with an option for a third: 
1. The string that will be searched.
2. The character(s) that you are searching for.
3. Optional: Offset, set to "1" (any value), indicated you are skipping the first found characer and want to know the next location of the same character after a certain offset.
*/

$quote = "Courage is resistance to fear, mastery of fear, not absence of fear.";

echo strpos($quote, "fear");
echo strpos($quote, "fear", 26);

/*
Please note that the function returns a value that must 
be either saved to a variable or printed out directly.
*/