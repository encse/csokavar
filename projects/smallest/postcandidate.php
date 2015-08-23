<?php
require('util.php');
if(isset($_POST) || isset($_GET))
{
	
   $candidate = $_POST['candidate'];
   if(!$candidate)
   {
	  $candidate = $_GET['candidate'];
	  $DEBUG = true;
   }
	
   if($candidate)
   {  
	  if(add_candidate($candidate))
		echo $candidate;
	  else
		echo 'error';
   }
}

?>