<?

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