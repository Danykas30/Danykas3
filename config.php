<?php
$host = "localhost";
$user = "root";  // Change if using another username
$pass = "";  // Change if you have a database password
$dbname = "comments_db";

$conn = new mysqli($host, $user, $pass, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
