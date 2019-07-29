<?php

// anything after this is a comment

# single line of commented code

/*
Anything in between is a comment
*/

$firstVariable = "Our First Variable\n"; // The \n is used for display purposes in a command line view
$firstvariable = "Really, is it our first?\n";

echo $firstVariable;
echo $firstvariable;

class Company
{
    
}

//-- both reference the same class
$p1 = new Company; 
$p2 = new COMPANY;

function webSite()
{
    echo "www.pluralsight.com\n";
}

//-- all three reference the same function
webSite();
Website();
WEBSITE();

/*******************
Remember - 
    PHP is a weak-type language. There is no need to declare 
    what type of value your variable is holding.
*******************/