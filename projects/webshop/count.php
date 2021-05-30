<?php
header("content-type: text/plain");
header("connection: close");

$username='webshop';
$password="VEF7x6d3hSfNxqKF";
$database='webshop';

usleep(500000);
$mysqli = new mysqli("localhost",$username,$password);

if (mysqli_connect_errno()) {
    echo "Challenge is down, contact the admin encse@csokavar.hu #1";
    exit();
}

$mysqli->select_db($database);

$c = $_GET['c'];

$query = "SELECT `name`, `price` FROM `items` WHERE `category` = $c";

//echo $query;
if($result = $mysqli->query($query))
{
	echo 'The query resulted in '.mysqli_num_rows($result).' items.';
	/*
	while ($row = mysql_fetch_assoc($result)) {
		print_r($row);
	}*/
}

$mysqli->close();

?>
