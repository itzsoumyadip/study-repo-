<?php

// --------------------------------
// -- Constructors
// --------------------------------

/*

Constructors are called when a class object is created.

They are used to set up any initialization that the object 
may need before it's used.

Think of it as a function, but with a designated name. The name
is __construct()

They are normally placed at the top of all the methods inside the class.

*/

class Person
{
    const AVG_LIFE_SPAN = 79;

    public $firstName;
    public $lastName;
    public $yearBorn; 

    function __construct()
    {
		echo "I'm in the Author constructor\n";
        $this->firstName = "Samuel Langhorne";
        $this->lastName = "Clemens";
        $this->yearBorn = 1899;
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

$newPerson = new Person();
echo $newPerson->getAuthorsName();