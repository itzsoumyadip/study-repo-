<?php

// --------------------------------
// -- Static Methods and Properties
// --------------------------------

/*
Static methods and properties can be accessed via the :: double colon and the class name. No need for the class to declared to an object variable.
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
        return self::$centuryPopular;          
    }
}

echo Author::$centuryPopular.PHP_EOL;
echo Author::getCenturyAuthorWasPopular();