<?php
/**
 * The template for displaying Comments.
 *
 * The area of the page that contains comments and the comment form.
 *
 * @package WordPress
 * @subpackage Twenty_Thirteen
 * @since Twenty Thirteen 1.0
 */

/*
 * If the current post is protected by a password and the visitor has not yet
 * entered the password we will return early without loading the comments.
 */
if ( post_password_required() )
	return;
?>

<div id="comments" class="comments-area">

	<?php if ( have_comments() ) : ?>
		<h1 class="comments-title">
			<?php echo number_format_i18n( get_comments_number() ). ' hozzászólás'; ?>
		</h1>

		<ol class="comment-list">
			<?php
				wp_list_comments( array(
					'style'       => 'ol',
					'short_ping'  => true,
					'avatar_size' => 74,
					'callback' => 'mytheme_comment',
				) );
			?>
		</ol><!-- .comment-list -->

		<?php
			// Are there comments to navigate through?
			if ( get_comment_pages_count() > 1 && get_option( 'page_comments' ) ) :
		?>
		<nav class="navigation comment-navigation" role="navigation">
			<h1 class="screen-reader-text section-heading"><?php _e( 'Comment navigation', 'twentythirteen' ); ?></h1>
			<div class="nav-previous"><?php previous_comments_link( __( '&larr; Older Comments', 'twentythirteen' ) ); ?></div>
			<div class="nav-next"><?php next_comments_link( __( 'Newer Comments &rarr;', 'twentythirteen' ) ); ?></div>
		</nav><!-- .comment-navigation -->
		<?php endif; // Check for comment navigation ?>

		<?php if ( ! comments_open() && get_comments_number() ) : ?>
		<p class="no-comments"><?php _e( 'Comments are closed.' , 'twentythirteen' ); ?></p>
		<?php endif; ?>
	<?php else: ?>
	<?php endif; // have_comments() ?>

		
	<?php 
		$commenter = wp_get_current_commenter();
		$req = get_option( 'require_name_email' );
		
		comment_form(array(
			'format' => 'xhtml',
			'fields' => array(

				  'author' =>
					'<p class="comment-form-author">'.
					
					'<input id="author" name="author" type="text" placeholder="Becses neve (kötelező)" value="' . esc_attr( $commenter['comment_author'] ) .
					'" size="30" required /></p>',

				  'email' =>
					'<p class="comment-form-email">'.
				
					'<input id="email" name="email" type="text" placeholder="Email címe (nem adjuk tovább)" value="' . esc_attr(  $commenter['comment_author_email'] ) .
					'" size="30" required /></p>',

				  'url' =>
					'<p class="comment-form-url">' .
					'<input id="url" name="url" type="text" placeholder="URL a gyors önkifejezésre" value="' . esc_attr( $commenter['comment_author_url'] ) .
					'" size="30" /></p>',
				),
			'comment_field' => '<p class="comment-form-comment"><textarea id="comment" name="comment" cols="45" rows="8" required></textarea></p>',
			'title_reply' => 'Mondana valamit? Vissza ne tartsa!',
			'title_reply_to' => '',
			'comment_notes_before' => '',
			'comment_notes_after' => '',
			'cancel_reply_link' => 'Mégsem',
			'label_submit' => 'Küldés',
		)); 
	?>

</div><!-- #comments -->