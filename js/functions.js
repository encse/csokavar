/**
 * Functionality specific to Twenty Thirteen.
 *
 * Provides helper functions to enhance the theme experience.
 */

( function( $ ) {
	var body    = $( 'body' ),
	    _window = $( window );

	/**
	 * Adds a top margin to the footer if the sidebar widget area is higher
	 * than the rest of the page, to help the footer always visually clear
	 * the sidebar.
	 */
	$( function() {
		if ( body.is( '.sidebar' ) ) {
			var sidebar   = $( '#secondary .widget-area' ),
			    secondary = ( 0 == sidebar.length ) ? -40 : sidebar.height(),
			    margin    = $( '#tertiary .widget-area' ).height() - $( '#content' ).height() - secondary;

			if ( margin > 0 && _window.innerWidth() > 999 )
				$( '#colophon' ).css( 'margin-top', margin + 'px' );
		}
	} );

	/**
	 * Enables menu toggle for small screens.
	 */
	( function() {
		var nav = $( '#site-navigation' ), button, menu;
		if ( ! nav )
			return;

		button = nav.find( '.menu-toggle' );
		if ( ! button )
			return;

		// Hide button if menu is missing or empty.
		menu = nav.find( '.nav-menu' );
		if ( ! menu || ! menu.children().length ) {
			button.hide();
			return;
		}

		$( '.menu-toggle' ).on( 'click.twentythirteen', function() {
			nav.toggleClass( 'toggled-on' );
		} );
	} )();

	/**
	 * Makes "skip to content" link work correctly in IE9 and Chrome for better
	 * accessibility.
	 *
	 * @link http://www.nczonline.net/blog/2013/01/15/fixing-skip-to-content-links/
	 */
	_window.on( 'hashchange.twentythirteen', function() {
		var element = document.getElementById( location.hash.substring( 1 ) );

		if ( element ) {
			if ( ! /^(?:a|select|input|button|textarea)$/i.test( element.tagName ) )
				element.tabIndex = -1;

			element.focus();
		}
	} );

	/**
	 * Arranges footer widgets vertically.
	 */
	if ( $.isFunction( $.fn.masonry ) ) {
		var columnWidth = body.is( '.sidebar' ) ? 228 : 245;

		$( '#secondary .widget-area' ).masonry( {
			itemSelector: '.widget',
			columnWidth: columnWidth,
			gutterWidth: 20,
			isRTL: body.is( '.rtl' )
		} );
	}
} )( jQuery );

(function($) {
	
	$('.swipe').each(function(){
		var bullets = $(this).find('.swipe-pagination li');
		bullets[0].className="active";
		var swipe = Swipe(this, {
			speed: 400,
			auto: 3000,
			continuous: true,
			disableScroll: false,
			stopPropagation: false,
			callback: function(pos) {
			  var i = bullets.length;
			  while (i--) {
				bullets[i].className = ' ';
			  }
			  bullets[pos].className = 'active';
			}
		});
		
		
		var dg = null;
		
		$(this).find('a').hover(
			function(){	
				if(dg) {
					clearTimeout(dg);
					dg = null;
				}
				swipe.stop(); 
			},
			function(){ 
				if(dg) {
					clearTimeout(dg);
					dg = null;
				}
				dg = window.setTimeout(	function() { swipe.next(); }, 1000);
			}
		);
		
	});
	
})(jQuery);


(function($) {
	$(document).ready(function() {
	 
		
		if(window.intiniteScroll && window.infiniteScroll.scroller)
			window.infiniteScroll.scroller.updateURL = function(){};
		
			
		
	});
})(jQuery);

//welcome message
console.log(atob('ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOTlYICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlHICAgQEBAICAgR2k7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQkBARyAgQEBAICBAQEA5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBAQDsgQEBAIGlAQEcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAQEA6QkBHLEBAQCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6QEBAQkJCQEBAICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLEBCQkJCQEAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgNU01MjUyNTI1MjUyNTNpckBCQkJCQkJyaTMyMjUyNTI1MjUyNTlpICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgQEBAQEBAQEBAQEBAQEBAQEJCQkJCQkJAQEBAQEBAQEBAQEBAQEBAICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICA6QEJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkBAICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICByQEJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJAOiAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICA5QEJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJAciAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICBAQEJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJARyAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICBAQEJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJAQCAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgIDpAQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJAQCAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgIGlAQkJCQkJCQkBAQEBAQkJCQkJCQkJCQkJCQkJAQEBAQEJCQkJCQkJCQCwgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgIDlAQkJCQkJCQEJycnJHQEBCQkJCQkJCQkJCQkBCaXJyTUBAQkJCQkJCQGkgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgIEBAQkJCQkJAciAgICAgO0BCQkJCQkJCQkJCQDUgICAgICBAQkJCQkJCQEcgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgIEBAQkJCQkJAOyAgICAgOkBCQkJCQkJCQkJCQDMgICAgICBAQEJCQkJCQEAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgOkBCQkJCQkJCQFg7OjsyQEJCQkJAQEBAQkJCQkBHcjosaUBAQkJCQkJCQEAgICAgICAgICAgICAgICAgICAKIDogICAgICAgICAgICAgICAgaUBCQkJCQkJCQkBAQEBAQEJAQEBATTNAQEBAQkBAQEBAQEBCQkJCQkJCQkA7ICAgICAgICAgICAgICAgICAKIDNAQEBAQEBAQEBAQEBAQEBAQEJCQkJCQkJCQkJCQkJCQEBAQnIgICAgLEdAQEBAQkJCQkJCQkJCQkJCQkBAQEBAQEBAQEBAQEBAQEBAQHIKICA6QEBAQEBAQEBAQEBAQEBAQEJCQkJCQkJCQkJCQkJAR3IgICAgICAgICAgO1hCQkJCQkJCQkJCQkJCQkJAQEBAQEBAR0BAQEBAQEBCOiAKICAgIHJAQEBCQkI7IDosOzozQEJCQkJCQkJCQkJCQkJAciAgIDVCQEdCQmkgICBCQkJCQkJCQkJCQkJCQkJAOiAgICAgckBCQkBAQHIgICAKICAgICAgQkBAQkBCICAgICBpQEJCQkJCQkJCQkJCQkJCQEBHLCA6OUBNOywzQEBCQkJCQkJCQkJCQkJCQkJAciAgICBCQEBCQEA5ICAgICAKICAgICAgIHJAQEBAQEcgICBCQEJCQkJCQkJCQkJCQkJCQkBAQEByICA7OUBAQEJCQkJCQkJCQkJCQkJCQkJAOSAgNUBAQEBAQCwgICAgICAKICAgICAgICAgOUBAQEBAOyBAQEJCQkJCQkJCQkJCQkJCQkJCQkBAQEBAQEJCQkJCQkJCQkJCQkJCQkJCQkJAQjpAQEBAQEAyICAgICAgICAKICAgICAgICAgICxAQEBAQEJAQkJCQkJCQkJCQkJCQkJCQkJCQkJCQEJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQEBAQkBAQCAgICAgICAgICAKICAgICAgICAgICAgNUBAQEBCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJAQEBpICAgICAgICAgICAKICAgICAgICAgICAgIDpAQEBCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkBAQiAgICAgICAgICAgICAKICAgICAgICAgICAgICAgckBCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQEByICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgIEdAQkJCQkJCQkJCQEBAQEJCQkJCQkJCQkJCQkJCQkJCQkBAQEBAQkJCQkJCQkJCQGkgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgIEBAQkJCQEBAQEBAR0JHQkBAQEBAQkJCQkJCQkJAQEBAQEJCQkJCQEBAQEBCQkJCQEIgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgOkBAQkJCR3I6O0BCICAgO0A5IDtpQEJCQkJCQkA5ciByQEcgICBpQDUgOzNAQkJCQEAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgckBCQkJAQiAgIDlAICAgM0AgICByQEJCQkJCQkBHICAgQEAgICA5QCAgIGlAQkJCQkAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgTUBCQkJCQEcgICBCICAgNXIgICxAQkJCQkJCQkJAOSAgIEIgICBHOiAgckBAQkJCQkByICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgQkBCQkJCQkBpICAgICAgICAgIEBAQkJCQkJCQkJAQHIgICAgICAgICA6QEBCQkJCQkBYICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgQEBCQkJCQkBALCAgICAgICAgQEBCQkJCQkJCQkJCQEA6ICAgICAgICBAQEJCQkJCQkBAICAgICAgICAgICAgICAKICAgICAgICAgICAgICA6QEBCQkJCQkJAQCAgICAgICA5QEJCQkJCQkJCQkJCQkBAICAgICAgIEdAQkJCQkJCQkBAICAgICAgICAgICAgICAKICAgICAgICAgICAgICByQEJCR0JHQkdCQEBAQEBAQEBAQkdCR0JHQkdHR0JHQkJAQEBAQEBAQEBCQkdHR0JHQkJAICAgICAgICAgICAgICAKCQkJICAKICAgICAgICAgIFRoaXMgaXMgY3Nva2F2YXIuaHUgRW5jc+kncyBob21lIG9uIHRoZSB3ZWIuIEhhcHB5IHN1cmZpbmcuCgkJICAKCQkgICAgICAgICAgICAgICAgY29udGFjdDogZW5jc2VAY3Nva2F2YXIuaHUKCg=='));


