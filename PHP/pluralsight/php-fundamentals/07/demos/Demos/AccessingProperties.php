<?php

// --------------------------------
// -- Accessing Properties
// --------------------------------

/*

Using the object we created we can access the individual properties 
by using the -> (object operator) followed by the property name (no $).

We can override the value inside the property by treating it as a 
variable and setting the new value.

The next time we access it...The new value will be used.

*/

class Person
{
    public $firstName = "Samuel Langhorne";
    public $lastName = "Clemens";
    public $yearBorn = 1899;
}

$newPerson = new Person();

echo $newPerson->firstName;

$newPerson->firstName = "Sam";

echo $newPerson->firstName;
