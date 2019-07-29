<?php

// --------------------------------
// -- PDO Example
// --------------------------------

$dbPassword = "PHPFundamentals";
$dbUserName = "PHPFundamentals";
$dbServer = "localhost";
$dbName = "PHPFundamentals";

$connection = new PDO('mysql:host='.$dbServer.';dbname='.$dbName, $dbUserName, $dbPassword);

$query = "SELECT first_name, last_name, pen_name FROM Authors ORDER BY first_name";
$resultObj = $connection->query($query);

if($resultObj->rowCount() > 0)
{
    foreach($resultObj as $singleRowFromQuery)
    {
        echo "Author: ".$singleRowFromQuery['first_name'].PHP_EOL;
    }
}

$resultObj = null;
$connection = null;