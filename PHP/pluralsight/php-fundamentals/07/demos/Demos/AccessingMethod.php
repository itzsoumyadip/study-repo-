<?php

// --------------------------------
// -- Accessing Methods
// --------------------------------

/*

To call a method inside of a class we use our object that we have created,
followed by the -> (object operator) then we use the method/function name.  If the 
function requires any parameters, we pass those in as well, just like any other function 
call. 

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

$newPerson->setFirstName("Sam");

echo $newPerson->getFirstName();
echo $newPerson->firstName;