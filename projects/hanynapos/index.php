﻿<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>  
<title>Hány napos vagyok?</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="author" content="Encsé Művek" />
<meta name="title" content="Hány napos vagyok?" />
<meta name="description" content="Mindig tudni akartad, hogy pontosan hány napos is vagy valójában?" />
<link rel="image_src" href="http://csokavar.hu/hanynapos/cake.jpg" / >

<link href="skin/style.css" media="all" rel="Stylesheet" type="text/css"/>

<script src="js/jquery.js"></script> 
<script src="js/jquery.urlparams.js"></script> 
<script src="js/date-hu-HU.js"></script> 
<script type="text/javascript">

	var date= null;
	
	$(document).ready(function () {

		var input = $("#q");
		input.val("");
		input.keyup( function(e){text_changed();});
	
		var date_string = $("#your_date");
		if($(document).getUrlParam("q"))
			input.val( unescape($(document).getUrlParam("q")));
		text_changed();
		calculate();
	});
	

	function text_changed()
	{
		
		var messages = ["Nem jó", "Nem értem", "Nem egészen világos, mit szeretnél mondani"];
		var input = $("#q");
		var date_string = $("#your_date");
		date_string.removeClass();
		date=null;
		if (input.val().length > 0) {
			date = Date.parse(input.val());
			if (date !== null) {
				input.removeClass();
				date_string.addClass("accept").text(date.toString("yyyy. MMMM dd, dddd HH:mm:ss"));
			} else {
				input.addClass("validate_error");
				date_string.addClass("error").text(messages[Math.round(messages.length * Math.random())] + "...");
			}
		} else {
			date_string.text("").addClass("empty");
		}
	}

	function calculate()
	{
		if(date!=null)
		{
			var m0 = date.getTime();
			var m1 = (new Date()).getTime();
			
			var  s= "<h3>Mennyi az annyi?</h3>";
			s +="<p>Most pontosan ";
			
			var d = m1-m0;
			var mMsec = d %1000; d /= 1000;
			var mSec = d %60; d /= 60;
			var mMin = d %60; d /= 60;
			var mHour = d %24; d /= 24;
			var mDays = d;
			
			s += Math.floor(mDays) + " napos, ";
			s += Math.floor(mHour) + " órás, ";
			s += Math.floor(mMin) + " perces, ";
			s += Math.floor(mSec) + " másodperces vagy. </p>";
			
			var d = m1-m0;
			s += "<p>Életkorod hetekben: "+Math.floor(d/(24*60*60*1000*7))+"</p>";
			s += "<p>Napokban: "+Math.floor(d/(24*60*60*1000))+"</p>";
			s += "<p>Órákban: "+Math.floor(d/(60*60*1000))+"</p>";
			s += "<p>Percekben: "+Math.floor(d/(60*1000))+"</p>";;
			s += "<p>Másodpercekben: "+Math.floor(d/(1000))+"</p>";;

			s += "<h3>Asztrológia</h3>";
			s += "<p>Csillagjegyed: " + getZodiacSign(date)[1] + "</p>";
			s += "<p>A kínai horoszkóp szerint: " + getChineseZodiacSign(date)[0] + "</p>";
		
			$('#result').html(s);
		}
		else
		{	
			$('#result').html('');
		}
		setTimeout("calculate()",1000);
		set_permalink();
	}
	function set_permalink()
	{
		var stText = $("#q").val();
		var uri = location.href.substring(0,location.href.lastIndexOf('/')+1);
		if(stText != '' && date != null)
			uri += '?q='+escape(stText);
		$('#permalink').html('<a href="'+uri+'">'+uri+'</a>');
		$('a[name="fb_share"]').attr('href', "http://www.facebook.com/sharer.php?u="+encodeURIComponent(uri)+"&amp;t=H%C3%A1ny%20napos%20vagyok%3F&amp;src=sp");
			}

	function getZodiacSign(date) {
    
	    var zodiac = new Array(
	        new Array(20, "Vízöntő"),
	        new Array(20, "Halak"),
	        new Array(21, "Kos"),
	        new Array(20, "Bika"),
	        new Array(21, "Ikrek"),
	        new Array(22, "Rák"),
	        new Array(23, "Oroszlán"),
	        new Array(23, "Szűz"),
	        new Array(23, "Mérleg"),
	        new Array(23, "Skorpió"),
	        new Array(22, "Nyilas"),
	        new Array(22, "Bak")
	    );
	  
	    var month = date.getMonth();
	    var day = date.getDate();

	    return day >= zodiac[month][0] ? zodiac[month] : zodiac[(month + 11) % 12];
	
        
	}

	function getChineseZodiacSign(date) {
	       
	        /* the start dates of the Chinese new year in format month.day */
	        /* this structure should be read startDate[0]= */
	      var cNYstartDate = new Array(
		    "1.31", "2.19", "2.08", "1.29", "2.16", "2.04", "1.25", "2.13", "2.02", "1.22",
		    "2.10", "1.30", "2.18", "2.06", "1.26", "2.14", "2.03", "1.23", "2.11", "2.01",
		    "2.20", "2.08", "1.28", "2.16", "2.05", "1.25", "2.13", "2.02", "1.23", "2.10",
		    "1.30", "2.17", "2.06", "1.26", "2.14", "2.04", "1.24", "2.11", "1.31", "2.19",
		    "2.08", "1.27", "2.15", "2.05", "1.25", "2.13", "2.02", "1.22", "2.10", "1.29",
		    "2.17", "2.06", "1.27", "2.14", "2.03", "1.24", "2.12", "1.31", "2.18", "2.08",
		    "1.28", "2.15", "2.05", "1.25", "2.13", "2.02", "1.21", "2.09", "1.30", "2.17",
		    "2.06", "1.27", "2.15", "2.03", "1.23", "2.11", "1.31", "2.18", "2.07", "1.28",
		    "2.16", "2.05", "1.25", "2.13", "2.02", "2.20", "2.09", "1.29", "2.17", "2.06",
		    "1.27", "2.15", "2.04", "1.23", "2.10", "1.31", "2.19", "2.07", "1.28", "2.16", /*1900->1999*/
		    "2.05", "1.24", "2.12", "2.01", "1.22", "2.09", "1.29", "2.18", "2.07", "1.26", /*2000->**** */
		    "2.14", "2.03", "1.23", "2.10", "1.31", "2.19", "2.08", "1.28", "2.16", "2.05", /* 10-19 */
		    "1.25", "2.12", "2.01", "1.22", "2.10", "1.29", "2.17", "2.06", "1.26", "2.13"	/* 20-29 */
		    );

	    var zodiac = new Array(
	        new Array("Patkány"),
	        new Array("Bivaly"),
	        new Array("Tigris"),
	        new Array("Nyúl"),
	        new Array("Sárkány"),
	        new Array("Kígyó"),
	        new Array("Ló"),
	        new Array("Kecske"),
	        new Array("Majom"),
	        new Array("Kakas"),
	        new Array("Kutya"),
	        new Array("Disznó")
	    );
	    var year = date.getYear() + 1900;
	    if (year < 1900 ||year > 2029)
	        return new Array("Nincs információ.", "Nincs információ.");
	    
	    var month = date.getMonth()+1;
	    var day = date.getDate();
	    var cYear; /* the same year as gregorian, except that if date<chineseNewYear than tis the previous */
	    var anYear; /* the assigned year number (1-12) */
	    var edgeMonth, edgeDay;

	    edgeMonth = parseInt(cNYstartDate[year - 1900].substring(0, cNYstartDate[year - 1900].indexOf(".")));
	    if (parseInt(month) < edgeMonth)
	        cYear = year - 1;
	    else 
        {
            if (parseInt(month) == edgeMonth) 
            {
                edgeDay = parseFloat(cNYstartDate[year - 1900].substring(parseInt(cNYstartDate[year - 1900].indexOf(".")) + 1, cNYstartDate[year - 1900].length));

	            if (parseInt(day) < edgeDay) 
	                cYear = year - 1;
	            else 
                    cYear = year;
	        } 
            else
                cYear = year; 
            
	    }
	    
        anYear = (cYear - 4) % 12;
        return zodiac[anYear];
	}

</script>

<style type="text/css">
#your_date
{
	text-align:center;
}
</style>

</head>
<body>
<div id="container">
	<div id="top">	

		<div id="top-content">
			<div id="logo">
				<h1><a href="http://www.csokavar.hu/hanynapos"><script>document.write(location.pathname.slice(0,-1));</script></a></h1>
			</div>
		</div>
	</div>

	<div id="main">
		<div id="main-content">
			<h2>Hány napos vagyok</h2>
			<p>Mindig tudni akartad, hogy pontosan hány napos is vagy valójában?</p>
			<p>Most egyszerűen kiszámolhatod, csak add meg a születésnapodat az alábbi mezőben:</p>
			<form id="query">
				<input type="text" size="10" id="q" value="" />
			</form>
			
			<p id="your_date"></p>
			<div id="result"></div>
				
			<p>&nbsp;</p>
				
			<h3>Tippek</h3>
			<p class="tipp">Kíváncsi vagy mikor jön a baba? Add meg a fogantatás időpontját, és máris megtudod hányadik hétben vagy. Ha minden jól megy, a baba a negyvenedik héten érkezik.</p>

	        <p>&nbsp;</p>
			<h3>Oszd meg az infót</h3>
			<p>permalink: <span id="permalink"></span></p>
			<a name="fb_share"  type="box_count" ></a> 
			<script src="http://static.ak.fbcdn.net/connect.php/js/FB.Share" type="text/javascript"></script>
		</div>
	</div>

	<div id="footer" style="overflow: hidden;">
		<p><a href="http://www.csokavar.hu/">Encsé Művek</a> - 2009 - napjainkig</p>
		<p>Kapcsolat: <a href="mailto:encse@csokavar.hu">encse@csokavar.hu</a></p>
	</div>
	
</div>


	<!-- Google Analytics for WordPress | http://yoast.com/wordpress/google-analytics/ -->
	<script type="text/javascript">
		var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
		document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
		var pageTracker = _gat._getTracker("UA-203054-9");
		pageTracker._initData();

		pageTracker._trackPageview();
	</script>
	<!-- End of Google Analytics code -->

</body>
</html>
