<?php
$servername = "localhost";
$username = "pooja";
$password = "";
$dbname = "greenhouse_essentials";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
