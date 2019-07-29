<?php

// --------------------------------
// -- Null Coalesce
// --------------------------------

/*

$a ?? "Default Value"

The idea is that if the first value is null then it will take the second value. If that value is null it will take the next value.

*/

$authors = ["Charles Dickens", "Jane Austin", "William Shakespeare", "Mark Twain", "Louisa May Alcott"];
//$count = count($authors);

$outcome = $count ? $count : "Count unvailable.";
$outcome = $count ?? "Count unvailable.";
