<?php
$DEBUG = false;

function get_best_candidate()
{
	$num = 10689912140;
	
	$stFile = 'candidates.txt';
	if(file_exists($stFile))
	{
		$fp =  fopen($stFile, 'r');
		if($fp)
		{
			$stPrev = '';
			while($st = fgets($fp))
			{
				$stPrev = $st;
			}
			fclose($fp);
			
			$num = $stPrev;
		}
	}
	return $num;
}

function add_candidate($n)
{
	Mlog(intval($n));
	if(!fCheckCandidate($n))
	{
		Mlog("nem j� sz�m");
		return false;
	}
	
    $fp = fopen('candidates.txt', 'a');
	if($fp)
	{
		fputs($fp, $n."\n");
		fclose($fp);
	}
	else
	{
		Mlog("a f�jl nem nyithat� meg �r�sra");
		return false;
	}
	return true;
}

function fCheckCandidate($n)
{
	if(intval($n) != $n || $n <= 0)
	{
		Mlog("nem sz�m");
		return false;
	}
	if(get_best_candidate() <= intval($n))
	{
		Mlog("t�l nagy sz�m");
		return false;
	}
	
	$fp = fsockopen("www.google.com", 80);
	if (!$fp) 
	{
		Mlog("nem siker�lt csatlakozni");
		return false;
	}
	
	$out  = "GET /search?hl=en&q=$n HTTP/1.1\r\n";
    $out .= "Host: www.google.com\r\n";
    $out .= "Connection: Close\r\n\r\n";
    fwrite($fp, $out);
    
    while (!feof($fp)) 
	{
		$st = fgets($fp);
		Mlog($st);
		if($st != '' && $st && stristr($st, 'did not match any documents'))
		{
			Mlog('ok');
			return true;
		}
    }
    fclose($fp);
	Mlog("tal�lat a weben");
	return false;
}

function Mlog($st)
{
	global $DEBUG;
	if($DEBUG)
	  echo $st.'<br/>';
}
?>