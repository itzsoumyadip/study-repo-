<?php

// --------------------------------
// -- Initial Parameters
// --------------------------------

/*

Each object that is created from a class can pass parameters in the initial declaration.

These parameters are passed into the __construct which is called automatically.

*/

class Person
{
    const AVG_LIFE_SPAN = 79;

    public $firstName;
    public $lastName;
    public $yearBorn; 

    function __construct($tempFirst = "", $tempLast = "", $tempYear = "")
    {
        $this->firstName = $tempFirst;
        $this->lastName = $tempLast;
        $this->yearBorn = $tempYear;
    }

    public function getFirstName()
    {
         return $this->firstName;
    }

    public function setFirstName($tempName)
    {
        $this->firstName = $tempName;
    }
}

$newPerson = new Person("Samuel Langhorne", "Clemens", 1899);
echo $newPerson->getFirstName();
