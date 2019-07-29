<?php

// --------------------------------
// -- Creating Methods
// --------------------------------

/*

When a function is inside of a class it it normally referred to as
a method. We create the method just like the function, the only difference...
We are calling it a method.  

*/

class Person
{
    const AVG_LIFE_SPAN = 79;

    public $firstName = "Samuel Langhorne";
    public $lastName = "Clemens";
    public $yearBorn = 1899;

    public function getFirstName()
    {
        
    }

    public function setFirstName($tempName)
    {
        
    }
}

$newPerson = new Person();
