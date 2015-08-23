var mood = Math.floor(Math.random()*2);

function performQuery(q)
{
	if (q.length > 1)
	{
		if (q.indexOf('?') < 0)
			q += '?';

		http=GetXmlHttpObject();
		if (http)
		{	
			var params = "q="+q+"&mood="+mood;
			
			loader = document.createElement('img');
			$(loader).attr({'src' : 'js/ajax-loader.gif'});
			
			$('#resultsPanel').prepend($(loader));
			
			http.open("POST", "query.php", true);

			http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			http.setRequestHeader("Content-length", params.length);
			http.setRequestHeader("Connection", "close");
			
			
			http.onreadystatechange = function() {//Call a function when the state changes.
				if(http.readyState == 4) {
					if(http.status == 200 && http.responseText != 'error')
					{
						st = '<p>&gt;<em>'+q+'</em><br />'+ http.responseText +'</p>';
						$(loader).replaceWith(st).fadeIn('slow', function(){loader.remove(); loader=null;});
					}
				}
			}
			http.send(params);
		}
	}
	return false;
}

function restart()
{
	mood = Math.floor(Math.random()*2);
	$('#resultsPanel').html('');
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
