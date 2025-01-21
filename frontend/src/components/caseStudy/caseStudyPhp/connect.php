<?php
// connect.php

//CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");


$servername = "localhost";//Xammp server mo to
$username = "root"; //uname ng server
$password = ""; //default pass
$dbname = "hosttest"; //database kung saan

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
