<?php

// --------------------------------
// -- Static Methods and Properties
// --------------------------------

/*
Static methods and properties allow the variable to be accessed without the need of the class object.

Static methods must be self contained, meaning they can't rely on the $this-> to grab data from other places. 
Think of it as a stand alone function call that happens to reside inside the class.
*/

class Person
{
    const AVG_LIFE_SPAN = 79;

    private $firstName;
    private $lastName;
    private $yearBorn; 

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

    protected function getFullName()
    {
        return $this->firstName." ".$this->lastName.PHP_EOL;
    }
}

class Author extends Person
{
    public static $centuryPopular = "19th";
    private $penName = "Mark Twain";

    public function getPenName()
    {
        return $this->penName.PHP_EOL;
    }    
    
    public function getCompleteName()    
	{
        return $this->firstName." ".$this->lastName." a.k.a. ".$this->penName.PHP_EOL;
    }
    
    public static function getCenturyAuthorWasPopular()
    {
           
    }
}
