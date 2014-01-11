<?php
/**
 * The Header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="main">
 *
 * @package WordPress
 * @subpackage Twenty_Thirteen
 * @since Twenty Thirteen 1.0
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="initial-scale=1.0,width=device-width">
	<title><?php wp_title( '|', true, 'right' ); ?></title>
	
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	
	<link rel="shortcut icon" href="/favicon/favicon.ico">
	<link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-touch-icon-57x57.png" />
	<link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-touch-icon-114x114.png" />
	<link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-touch-icon-72x72.png" />
	<link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-touch-icon-144x144.png" />
	<link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-touch-icon-60x60.png" />
	<link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-touch-icon-120x120.png" />
	<link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-touch-icon-76x76.png" />
	<link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-touch-icon-152x152.png" />
	<link rel="icon" type="image/png" href="/favicon/favicon-196x196.png" sizes="196x196" />
	<link rel="icon" type="image/png" href="/favicon/favicon-160x160.png" sizes="160x160" />
	<link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
	<link rel="icon" type="image/png" href="/favicon/favicon-32x32.png" sizes="32x32" />
	<link rel="icon" type="image/png" href="/favicon/favicon-16x16.png" sizes="16x16" />
	<meta name="msapplication-TileColor" content="#ffffff" />
	<meta name="msapplication-TileImage" content="/favicon/mstile-144x144.png" />
	<meta name="msapplication-square70x70logo" content="/favicon/mstile-70x70.png" />
	<meta name="msapplication-square144x144logo" content="/favicon/mstile-144x144.png" />
	<meta name="msapplication-square150x150logo" content="/favicon/mstile-150x150.png" />
	<meta name="msapplication-square310x310logo" content="/favicon/mstile-310x310.png" />
	<meta name="msapplication-wide310x150logo" content="/favicon/mstile-310x150.png" />
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<div id="page" class="hfeed site">
		<header id="masthead" class="site-header" role="banner">
			

			<div id="navbar" class="navbar">
				
				<nav id="site-navigation" class="navigation main-navigation" role="navigation">
					<img class="logo" src="<?php echo get_stylesheet_directory_uri();?>/logo/csoka3.svg"/>
					<a class="home-link" href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home">
						<h1 class="site-title"><?php bloginfo( 'name' ); ?></h1>
					
						
						
					</a>
				
					
					<a class="screen-reader-text skip-link" href="#content" title="<?php esc_attr_e( 'Skip to content', 'twentythirteen' ); ?>"><?php _e( 'Skip to content', 'twentythirteen' ); ?></a>
					<?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_class' => 'nav-menu' ) ); ?>
					<?php get_search_form(); ?>
					<h3 class="menu-toggle"><span class="genericon genericon-menu"></span></h3>
				</nav> 
			</div> 
		</header><!-- #masthead -->
		<header>
		
		</header>
		<div id="main" class="site-main">
