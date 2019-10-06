(function () {
    'use strict';
    document.documentElement.className = 'fallback';
    
    var css_href = '//csokavar.hu/wp-content/themes/csokavar/fonts.css?ver=5.2.3';
    var cacheLocation = css_href;
    var localStorageSupported = function() {
      try {
        localStorage.setItem('test', 'test');
        localStorage.removeItem('test');
        return true;
      } catch(e) {
        return false;
      }
    }
  
    if (localStorageSupported() && localStorage[cacheLocation]) {
      injectRawStyle(localStorage.getItem(cacheLocation));
    } else {
      window.onload = function() {
        injectFontsStylesheet();
      }
    }
  
    function injectFontsStylesheet() {
      var xhr = new XMLHttpRequest();
        xhr.open('GET', css_href, true);
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4) {
            injectRawStyle(xhr.responseText);
            localStorage.setItem(cacheLocation, xhr.responseText);
          }
        }
      xhr.send();
    }
  
    function injectRawStyle(text) {
      var style = document.createElement('style');
      style.innerHTML = text;
      document.getElementsByTagName('head')[0].appendChild(style);
      document.documentElement.className = 'webFont';
    }
  }());