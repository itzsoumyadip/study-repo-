<?php

// --------------------------------
// -- Array
// --------------------------------

/*

An array is a collection of values. Mostly notably they are a key/value type of data.

In order to set up an array you declare your variable and then you set it equal to the 
array() language contruct, or you can use the shortend array syntax which uses the open 
close square brackets.

Any array that doesn't define it's keys is an indexed array.

Each elemet in an array is separated by a comma.

Values can be of any type.

*/

$authors = array("Charles Dickens", "Jane Austin", "William Shakespeare", "Mark Twain", "Louisa May Alcott");
$books = ["Little Women", "Jane Eyre", "Richard III", "Oliver Twist"];

//-- Sample of an array with other types
$allTypes = [10, 1.3, "hello", true]; # a value of array will be a multi-demensional array, which is covered in that section.

print_r($authors);

print_r($books);

print_r($allTypes);