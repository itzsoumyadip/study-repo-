<?php

// --------------------------------
// -- Prepared Statements
// --------------------------------

<?php

$dbPassword = "PHPFundamentals";
$dbUserName = "PHPFundamentals";
$dbServer = "localhost";
$dbName = "PHPFundamentals";

$connection = new mysqli($dbServer, $dbUserName, $dbPassword, $dbName);

if($connection->connect_errno)
{
    die("Failed to connect to the Database. Reason: ".$connection->connect_error);
}

//-- previous query
//$query = "SELECT * FROM Authors ORDER BY first_name";
//$resultObj = $connection->query($query);

$tempFirstName = 'Test';

$query = "SELECT first_name, last_name, pen_name FROM Authors WHERE first_name = ?";
$statementObj = $connection->prepare($query);

$statementObj->bind_param("s", $tempFirstName);
$statementObj->execute();

$statementObj->bind_result($firstName, $lastName, $penName);
$statementObj->store_result();

if ($statementObj->num_rows() > 0) 
{
    while ($statementObj->fetch()) 
    {
        echo $firstName." ".$lastName."(".$penName.")".PHP_EOL;
    }
    
    //-- previous loop
    //while ($singleRowFromQuery = $resultObj->fetch_array()) 
    //{
    //    echo "Author: ".$singleRowFromQuery['first_name'].PHP_EOL;
    //}
}

$statementObj->close();
$connection->close();