<!DOCTYPE html>
<?php require('../bootstrap.php'); ?>
<html>
<head>
	<title>A legkisebb említésre sem méltó szám</title>
	<?php csv_head(); ?>
	<script src="http://www.google.com/uds/api?file=uds.js&amp;v=1.0&amp;key=ABQIAAAAqbaRPIV9iaBHgDMCPwmadBRW3vYFnc9-IkLGdT26W10_kKr1-xSwambXaG_oFNwU8FZlDDkqpB-fEw" type="text/javascript"></script>
	<script src="js/jb.js"></script> 

<style>
	#bestResult {
		text-align:center;
	}
</style>

</head>
<body>
	<?php csv_header(); ?>

	<h2>A legkisebb említésre sem méltó szám</h2>
	<p>Elhatároztam, hogy a phd-met a <em>legkisebb említése sem méltó szám</em>ról fogom írni (nem). A legkisebb említésre sem méltó számon azt a legkisebb pozitív egész számot értem, amire a Google nem ad egyetlen találatot sem.</p>

	<p>A nagyságrendről. Millióig hamar kiesnek a számok, mert csomó ilyet használnak pl. felhasználók vagy fórum hozzászólások azonosítására. Első nekifutásra a százmilliós nagyságrendben találtam jelölteket, aztán nekiláttam és <a href="http://code.google.com/apis/ajaxsearch/">Google AJAX Search API</a>-val csináltam egy kis weblapot, ami célzottan keres. </p>

	<p>A keresés állása az alábbi képen látható. Muszáj képet használni, hiszen a Google rögtön kicsavarná a kezemből, ha szövegesen írnám ide a jelöltet. Elég törékeny ez a definíció. (Arról nem is beszélve, hogy előbb utóbb majd képekben is elkezdenek szöveget keresni.)</p>
	<div id="bestResult"><p><img src="candidate.php"></p></div>

	<p>Ha hozzájárulnál a sikerhez, íme egy űrlap, csak egy számot kell bele írni, aztán klikk a search-re.</p>
	<form name="numsearch" onsubmit="return performQuery()">
		<input type="text" size="55" name="q" value="" />
		<input type="submit"  value="search" />
	</form>

	<div id="statusPanel"></div>
	<div id="searchIndicator"></div>
	<div id="resultsPanel"></div>

	<?php csv_footer(); ?>
</body>
</html>

