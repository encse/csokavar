window.addEventListener("load", function(){
	document.querySelectorAll('.site-heading nav').forEach(element => {
		const a = document.createElement('a');
		a.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M0 4h16v2H0v2zm0 5h16v2H0v2zm0 5h16v2H0v2z" fill="currentColor"/></svg>';
		a.href="#";
		a.classList.toggle("dropdown");

		element.parentNode.insertBefore(a, element);

		a.onclick = () => {
			element.classList.toggle("active");
			return false;
		}
	})
});
