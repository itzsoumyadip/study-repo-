<?php

// --------------------------------
// -- Create a Property
// --------------------------------

/*

When declaring properties you can set deafult values to specific variables inside the class. 

Any property with a set value must be a simple constant meaning you can't have a value that is being acted upon. 

*/

class Person
{
    public $firstName = "Samuel Langhorne";
    public $lastName = "Clemens";
    public $yearBorn = 1899;
    //public $yearBorn = 1920 - 21; # not allowed
}

$newAuth = new Person();

