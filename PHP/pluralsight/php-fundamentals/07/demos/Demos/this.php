<?php

// --------------------------------
// -- $this
// --------------------------------

/*

Somtimes we need to access a class' properties (variables) or methods (functions)

In order to reference itself we use the $this pseudo-variable

$this is a reference to the calling object.

The pseudo-variable $this is available inside any class method when that method is called from within an object context. - PHP website

*/

class Person
{
    const AVG_LIFE_SPAN = 79;

    public $firstName = "Samuel Langhorne";
    public $lastName = "Clemens";
    public $yearBorn = 1899;

    public function getFirstName()
    {
         return $this->firstName;
    }

    public function setFirstName($tempName)
    {
        $this->firstName = $tempName;
    }
}

$newPerson = new Person();