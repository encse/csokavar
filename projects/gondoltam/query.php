<?php

if(isset($_POST) || isset($_GET))
{
   $q = strtolower($_POST['q']);
   $mood = $_POST['mood'];
   
   $kerdoszavak =  array('mi','mik','mit','miket','ki','kicsoda','mikor','mennyi', 
			'mennyit','milyen', 'hogy', 'hogyan','melyik','melyiket','hol','hány','hánykor',
			'miért','miről','mivel','mikkel','kié','kiről','kiké','kikről','kivel','kikkel', 'kire', 'mire',
			'kit','kicsodát','kiket','meddig','mikortól','mióta','hova','honnan');
	
	if (matchany($q,  $kerdoszavak))
    {
		$answer = "Eldöntendő kérdést kérek.";
	}
    else
    {
		$st = md5($q);
		$c = 0;
		for($i=0;$i<strlen($st);$i++)
			$c += ord($st[$i]);
  
	
		$answer = ($c+$mood) % 2 == 0 ? 'Igen.' : 'Nem.';
    }
   
   Log_LogToFile('logs/questions.txt', $q."#".$answer);
   echo $answer;
}

function matchany($text ,$needles=array()){
    
	foreach($needles as $pattern){
	
        if(preg_match('/'.$pattern.'[\s\?]/i', $text))
			return true;
    }
    return false;
} 

function Log_LogToFile($filename, $msg /*, params*/ )
{ 
	// open file
	$fd = fopen($filename, "a+");
	if($fd)
	{
		$rgstArgs = func_get_args();
		$rgstArgEscaped = array();
		for($i = 2; $i < count($rgstArgs); $i++)
		{	
			$st = $rgstArgs[$i];
			if(strlen($st) > 255) $st = substr($st, 0, 255). '... [truncated]';
			array_push($rgstArgEscaped, Log_StEscape($st));
		}
		
		$str = '['.date('Y/m/d H:i:s', mktime()).'; ip='.$_SERVER['REMOTE_ADDR'].'] '.vsprintf($msg, $rgstArgEscaped);
		
		if(strlen($str) > 300) $str = substr($str, 0, 300). '[...] truncated';
		// write string
		fwrite($fd, $str . "\n");
		// close file
		fclose($fd);
	}
	
}
?>