<?php

$connection = new mysqli($dbServer, $dbUserName, $dbPassword, $dbName);

$query = "SELECT id, first_name, last_name, pen_name FROM Authors ORDER BY first_name";
$resultObj = $connection->query($query);

?>