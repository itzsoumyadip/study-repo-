<?php

// --------------------------------
// -- Update, Delete, Insert Record
// --------------------------------

/*

New:
    method - $connection->query()

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

//$query = "UPDATE Authors SET pen_name = 'L. M. Montgomery' WHERE id = 2";
//$query = "DELETE FROM Authors WHERE id = 4";
$query = "INSERT INTO Authors (first_name, last_name, pen_name) VALUES ('Arthur Ignatius Conan', 'Doyle', 'Sir Arthur Ignatius Conan Doyle')";

$connection->query($query);

$connection->close();
