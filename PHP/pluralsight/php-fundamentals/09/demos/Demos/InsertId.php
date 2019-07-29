<?php

// --------------------------------
// -- Grab the most recent record's id
// --------------------------------

/*

New: 
    property - $connection->insert_id 

*/


$dbPassword = "PHPFundamentals";
$dbUserName = "PHPFundamentals";
$dbServer = "localhost";
$dbName = "PHPFundamentals";

$connection = new mysqli($dbServer, $dbUserName, $dbPassword, $dbName);

if($connection->connect_errno)
{
    exit("Database Connection Failed. Reason: ".$connection->connect_error);
}

//-- Change Values to create a new author
$query = "INSERT INTO Authors (first_name, last_name, pen_name) VALUES ('John Ronald Reuel', 'Tolkien', 'J. R. R. Tolkien')";
$connection->query($query);

echo "Newly Created Author Id:". $connection->insert_id;

$connection->close();
