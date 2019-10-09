<?php
/**
 * The main template file.
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 */

?><!DOCTYPE html>
<html>
	<head>
		<meta charset="<?php bloginfo( 'charset' ); ?>">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<?php wp_head(); ?>
	</head>
	<body>
		<?php 
			$feat_image = is_home() ? 
				get_template_directory_uri() . '/img/home-background.jpg' : 
				wp_get_attachment_url( get_post_thumbnail_id($post->ID) ); 

			if (!$feat_image) {
				$feat_image = "linear-gradient(to right, #0f2027, #203a43, #2c5364)";
			} else {
				$feat_image = "url($feat_image)";
			}
		?>
		<header 
			class="header" 
			style="background-image: <?php echo $feat_image ?>"
		>
			<section class="site-heading">
				<a class="site-title" href="/"><?php echo get_bloginfo('name'); ?></a>
				<?php csokavar_clean_custom_menus('primary'); ?>
			</section>
			<?php $single = is_single() || is_page(); ?>

			<?php if (is_home()): ?>
				<div class="page-heading home-page-heading">
					<h1><?php echo get_bloginfo('name'); ?></h1>
					<p class="subtitle"><?php echo get_bloginfo('description'); ?></p>
				</div>
			<?php elseif (is_page()): ?>
				<div class="page-heading home-page-heading">
					<h1><?php the_title() ?></h1>
				</div>
			<?php elseif (is_search() ): ?>
				<div class="page-heading">
					<h1>Minden, ami "<?php echo esc_html( get_search_query( false ) ); ?>"</h1>
				</div>
			<?php elseif (is_archive() ): ?>
				<div class="page-heading">
					<h1><?php echo get_the_archive_title() ?></h1>
				</div>
			<?php else : ?>
				<div class="page-heading">
					<h1><?php the_title() ?></h1>
					<p class="subtitle"><?php csokavar_posted_on(); ?></p>
				</div>
			<?php endif; ?>

		</header>
		<main>
			<?php if (have_posts()): while (have_posts()): 
				the_post(); 
			?>
				<article>
					<?php if (!$single): ?>
						<header>
							<h2 class="title"><a href="<?php the_permalink() ?>" rel="bookmark"><?php the_title() ?></a></h2>
							<p class="subtitle"><?php csokavar_posted_on(); ?></p>
						</header>
					<?php endif; ?>

					<section>
						<?php $single ? the_content() : the_excerpt() ?>
					
					</section>

					<?php if ($single): ?>
						<footer>
							<?php csokavar_entry_footer() ?>
							<hr />
						</footer>
					<?php endif; ?>

				</article>


				<?php
					// If comments are open or we have at least one comment, load up the comment template.
					if ( comments_open() || get_comments_number() ) :
						comments_template();
					endif;
				?>

			<?php endwhile; endif; ?>
			<?php csokavar_posts_navigation(); ?>
		</main>
		<footer class="footer">  
			<nav class="social-links">
				<ul>
					<li><a href="https://twitter.com/encse" target="_blank" class="twitter-icon"></a></li>
					<li><a href="https://www.linkedin.com/in/ncsdavid/" target="_blank" class="linkedin-icon"></a></li>
					<li><a href="https://github.com/encse" target="_blank" class="github-icon"></a></li>
				</ul>
			</nav>
			<p class="copyright">2006 - <?php echo date("Y")?> csokavar.hu</p>
		</footer>
		<?php wp_footer(); ?>
	</body>
</html>