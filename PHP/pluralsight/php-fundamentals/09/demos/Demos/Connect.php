<?php

// --------------------------------
// -- Connecting to a database
// --------------------------------

/*

New:
    class call - new mysqli(< 6 optional parameters>);
    property - $connection->connect_errno
    property - $connection->connect_error

*/


$dbPassword = "PHPFundamentals";
$dbUserName = "PHPFundamentals";
$dbServer = "localhost";
$dbName = "PHPFundamentals";

$connection = new mysqli($dbServer, $dbUserName, $dbPassword, $dbName);

print_r($connection);

if($connection->connect_errno)
{
    //echo "Database Connection Failed. Reason: ".$connection->connect_error;
    exit("Database Connection Failed. Reason: ".$connection->connect_error);
}

