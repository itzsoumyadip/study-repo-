<?php

// --------------------------------
// -- Accessing Constants
// --------------------------------

/*

Accessing a constant is different that accessing a property. We use the same object 
variable, but instead of the -> we use the :: (scope resolution operator)
This will be covered in more detail later in this module, but for now just know 
that to access a constant inside of a class we use ::.

Scope Resolution Operator - Paamayim Nekudotayim (hebrew for double colon)
*/

class Person
{
    const AVG_LIFE_SPAN = 80;

    public $firstName = "Samuel Langhorne";
    public $lastName = "Clemens";
    public $yearBorn = 1899;
}

$newPerson = new Person();

echo $newPerson::AVG_LIFE_SPAN;
echo Author::AVG_LIFE_SPAN;