<?php

// --------------------------------
// -- Creating a Constant
// --------------------------------

/*

Normal PHP constants can be used inside of a class, but a class can have it's
own constants that are only available when using that particular class.

*/

class Person
{
    const AVG_LIFE_SPAN = 80;

    public $firstName = "Samuel Langhorne";
    public $lastName = "Clemens";
    public $yearBorn = 1899;
}

$newPerson = new Person();
