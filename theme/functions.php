<?php


remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_head', 'wp_resource_hints', 2);
remove_action('wp_head', 'rest_output_link_wp_head', 10);
remove_action('wp_head', 'rsd_link');
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'wp_generator');
remove_action('wp_head', 'public_styles' );
remove_action('wp_head', 'rest_output_link_wp_head');
remove_action('wp_head', 'wp_oembed_add_discovery_links');
remove_action('wp_print_styles', 'print_emoji_styles');
remove_action('template_redirect', 'rest_output_link_header', 11 );

add_filter( 'comment_text', 'do_shortcode' ); 

/**
 * csokavar functions and definitions
 */

function csokavar_setup() {
	

	register_nav_menus( array(
		'primary' => esc_html__( 'Primary Menu', 'cleanblog' ),
	) );

	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	

}
add_action( 'after_setup_theme', 'csokavar_setup' );


function csokavar_scripts() {

	wp_dequeue_style( 'wp-block-library' ); // Wordpress core
	wp_dequeue_style( 'wp-block-library-theme' ); // Wordpress core
	wp_deregister_script( 'wp-embed' );

	wp_enqueue_style( 'csokavar-style', get_template_directory_uri() . '/style.less' );
	
	wp_enqueue_script( 'csokavar-ui', get_template_directory_uri() . '/js/ui.js' );
	wp_enqueue_script( 'csokavar-fonts', get_template_directory_uri() . '/js/fonts.js' );
	wp_enqueue_script( 'csokavar-welcome', get_template_directory_uri() . '/js/welcome.js' );
}
add_action( 'wp_enqueue_scripts', 'csokavar_scripts' );

function csokavar_posted_on()
{

	$time_string = '<time class="posted-on" datetime="%1$s">%2$s</time>';

	$time_string = sprintf(
		$time_string,
		esc_attr(get_the_date('c')),
		esc_html(get_the_date())
	);

	echo $time_string;
}

function csokavar_clean_custom_menus($menu_name) {
	if (($locations = get_nav_menu_locations()) && isset($locations[$menu_name])) {
		$menu = wp_get_nav_menu_object($locations[$menu_name]);
		$menu_items = wp_get_nav_menu_items($menu->term_id);

		$menu_list = '<nav role="menubar">' ."\n";
		$menu_list .= "\t\t\t\t". '<ul>' ."\n";
		foreach ((array) $menu_items as $key => $menu_item) {
			$title = $menu_item->title;
			$url = $menu_item->url;
			$menu_list .= "\t\t\t\t\t". '<li><a href="'. $url .'">'. $title .'</a></li>' ."\n";
		}
		$menu_list .= "\t\t\t\t". '</ul>' ."\n";
		$menu_list .= "\t\t\t". '</nav>' ."\n";
	} else {
		// $menu_list = '<!-- no list defined -->';
	}
	echo $menu_list;
}


// Add a Read More link to the end of the excerpt
function custom_excerpt_more( $more ) {
	return ' <a href="' . get_permalink( get_the_ID() ) . '">...</a>';
}
add_filter( 'excerpt_more', 'custom_excerpt_more' );


/**
 * Display navigation to next/previous set of posts when applicable.
 */
function csokavar_posts_navigation() {
	// Don't print empty markup if there's only one page.
	if ( $GLOBALS['wp_query']->max_num_pages < 2 ) {
		return;
	}
	?>
	<ul class="pager">
		<?php if ( get_previous_posts_link() ) : ?>
		<li class="previous"><?php previous_posts_link( 'Előző' ); ?></li>
		<?php endif; ?>

		<?php if ( get_next_posts_link() ) : ?>
		<li class="next"><?php next_posts_link( 'Következő' ); ?></li>
		<?php endif; ?>
	</ul>
	<?php
}


/**
 * Prints HTML with meta information for the categories, tags and comments.
 */
function csokavar_entry_footer() {
	if ( 'post' == get_post_type() ) {
		$tags_list = get_the_tag_list( '', ', ' );
		if ( $tags_list ) {
			printf('<p>'.$tags_list.'</p>'); 
		}
		echo get_previous_post_link();
	}
}

function csokavar_customFormatGallery($string,$attr){

	$posts_order_string = $attr['ids'];
	$posts_order = explode(',', $posts_order_string);

	$output = "<div class=\"gallery-container\">";
	$posts = get_posts(array(
		  'include' => $posts_order,
		  'post_type' => 'attachment', 
		  'orderby' => 'post__in'
	));

	foreach($posts as $imagePost){
		$output .= '<div class="gallery-item"><img src="' . wp_get_attachment_image_src($imagePost->ID, 'full')[0] . '" alt="" /></div>';
	}

	$output .= "</div>";

	
	return $output;
}
add_filter('post_gallery','csokavar_customFormatGallery',10,2);

function csokavar_responsive_embeds($html)
{	
	return 
		'<div class="iframe-container">
			<div style="padding-top: 75%;position: relative;">
				<div style="position: absolute;top: 0;bottom: 0;left: 0;right: 0;"></div>
			</div>
			<div style="position: absolute; top: 0; bottom: 0; left: 0; right: 0; text-align: center;">
				<div style="display: inline-block;height: 100%;position: relative;">
					<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAQAAAAe/WZNAAAADklEQVR42mNkgAJGDAYAAFEABCaLYqoAAAAASUVORK5CYII=" style="height: 100%;">'.$html.'
				</div></div></div>';
}

add_filter('embed_oembed_html', 'csokavar_responsive_embeds', 10, 3);