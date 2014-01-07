<?php
/**
 * The main template file.
 *
 * This is the most generic template file in a WordPress theme and one of the
 * two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * For example, it puts together the home page when no home.php file exists.
 *
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Twenty_Thirteen
 * @since Twenty Thirteen 1.0
 */

get_header(); ?>

			
				<div class='swipe'>
				  <div class='swipe-wrap'>
					<?php 
							$recent_posts = wp_get_recent_posts(array(
								'numberposts' => 5,
								'post_status' => 'publish',
							)); 
							
							foreach( $recent_posts as $recent ) : ?>
							<div>
								<div class="entry-thumbnail">
									<?php echo get_the_post_thumbnail($recent['ID'], 'post-thumbnail', array('class' => 'crop-vertical')); ?>
								</div>
								<h2 class="entry-title">
								<a href="<?php echo get_permalink($recent["ID"]); ?>" title="<?php echo esc_attr($recent["post_title"]) ?>">
									<?php echo $recent["post_title"] ?>
								</a>
								</h2>
							</div>
							<?php endforeach; ?>
						
				  </div>
				  
				  <ul class="swipe-pagination">
					<?php foreach( $recent_posts as $recent ) echo '<li></li>'; ?>
				</ul>
				</div>
	
	<div id="primary" class="content-area">
		<div id="content" class="site-content" role="main">
		<?php if ( have_posts() ) : ?>

			<?php /* The loop */ ?>
			<?php while ( have_posts() ) : the_post(); ?>
				<?php get_template_part( 'content', get_post_format() ); ?>

			<?php endwhile; ?>

		

		<?php else : ?>
			<?php get_template_part( 'content', 'none' ); ?>
		<?php endif; ?>

		</div><!-- #content -->
	</div><!-- #primary -->

<?php get_footer(); ?>