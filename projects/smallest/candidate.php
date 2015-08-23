<?php
require('util.php');

if(isset($_GET['x']))
{
	echo get_best_candidate();
	exit;
}


// Create the image
$im = imagecreatefrompng("skin/captchabg.png") or die("Cannot Initialize new GD image stream");

// Create some colors
$white = imagecolorallocate($im, 255, 255, 255);
$grey = imagecolorallocate($im, 128, 128, 128);
$black = imagecolorallocate($im, 0, 0, 0);
/*imagefilledrectangle($im, 0, 0, 399, 29, $white);*/

// The text to draw
$text = isset($_GET['n']) && isset($_GET['n']) ? $_GET['n'] : get_best_candidate();
// Replace path by your own font path
putenv('GDFONTPATH=' . realpath('.'));
$font = realpath('skin/captchafont.ttf');

// Add some shadow to the text
/*imagettftext($im, 20, 0, 11, 21, $grey, $font, $text);*/

$im2 = imagecreatetruecolor(400, 100);
$size = imagettftext($im2, 30, 0, 10,50, $grey, $font, $text);

$xmin = $size[0];
$ymax = $size[1];
$xmax = $size[2];
$ymin = $size[5];

$width = imagesx($im);
$height = imagesy($im);

$x0 = ($width - ($xmax-$xmin)) / 2;
$y0 = $height-($height - ($ymax-$ymin)) / 2;

// Add the text
imagettftext($im, 30, 0, $x0, $y0, $black, $font, $text);

// Using imagepng() results in clearer text compared with imagejpeg()
imagepng($im);
imagedestroy($im);

?>