var stSearching="Keresés...";
var stNewCandidate="Új jelöltet találtál!";
var stNotFound="Sajnos nem találtunk semmit.";

var qStart;
var q;
var newCandidate = 0;
var aListener = new MyListener();

var searcher = new GwebSearch();

var options = new GsearcherOptions();

function MyListener()
{
}

MyListener.prototype.handleCallback = function ()
{
	if(searcher.results && searcher.results.length == 0)
	{
		postCandidate(q);
	}
	else
	{
		var resultsHTML = "";
	    var thisResult = searcher.results[0];
        resultsHTML += "<div class=\"result\"><p>";
        resultsHTML += "<div class=\"result\"><p>";
        resultsHTML += "<a href=\"" + thisResult.url + "\">" + thisResult.title + "</a><br />";
        resultsHTML += thisResult.content + "<br />";
        resultsHTML += "<span class=\"url\">" + thisResult.url + "</span>";
        if (thisResult.cacheUrl) 
        {
             resultsHTML += " - <a class=\"cached\" href=\"" + thisResult.cacheUrl + "\">Cached </a>";
        }
        resultsHTML += "</p></div>";
	    document.getElementById('resultsPanel').innerHTML = resultsHTML;
		performNextQuery();
	}
	
	
}                         

function refreshImg()
{
	document.getElementById('bestResult').innerHTML = '<img src="candidate.php?d='+new Date()+'" />';
}


searcher.setNoHtmlGeneration();

searcher.setSearchCompleteCallback(aListener, MyListener.prototype.handleCallback );

function performQuery()
{
	document.getElementById('resultsPanel').innerHTML = "";
	var theForm = document.numsearch;
	qStart = q = theForm.q.value;
	newCandidate = 0;
	q++;
	document.getElementById('searchIndicator').innerHTML = "<p><img src=\"js/ajax-loader.gif\" />"+stSearching+"</p>";
	
	theForm.style.display="none";
   	performNextQuery();
	return false;
}
function searchFinished()
{
   	document.getElementById('searchIndicator').innerHTML = "";
   	document.getElementById('resultsPanel').innerHTML = "";
	var theForm = document.numsearch;
	theForm.q.value = q;
	theForm.style.display="";
	if(newCandidate == 0)
	{
		alert(stNotFound);
	}
}

function performNextQuery()
{        
	q--;
	   
	if(q > 1 && qStart - q < 20)
	{
		searcher.execute( q );
	}
    else
	{
	    searchFinished();
	}
}

function postCandidate(q)
{
	http=GetXmlHttpObject();
	if (http==null)
		return;
	var url="postcandidate.php";
	
	var params = "candidate="+q;
	http.open("POST", url, true);

	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	http.setRequestHeader("Content-length", params.length);
	http.setRequestHeader("Connection", "close");
	
	http.onreadystatechange = function() {//Call a function when the state changes.
		if(http.readyState == 4) {
			if(http.status == 200 && http.responseText != 'error')
			{
				if(newCandidate == 0 || newCandidate > q)
				{
					newCandidate = q;
					alert(stNewCandidate + '\n' + newCandidate);
					refreshImg();
				}
			}
			performNextQuery();
		}
	}

	http.send(params);
}

function GetXmlHttpObject()
{ 
	var objXMLHttp=null;
	if (window.XMLHttpRequest)
		objXMLHttp=new XMLHttpRequest();
	else if (window.ActiveXObject)
		objXMLHttp=new ActiveXObject("Microsoft.XMLHTTP");
	
	return objXMLHttp;
} 