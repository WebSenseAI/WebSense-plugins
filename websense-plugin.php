<?php
/*
Plugin Name: Web Sense AI
Description: A simple example of integrating a Lit.js component into WordPress.
Version: 1.0
Author: Luis Beqja
*/

// Enqueue scripts and styles
function my_lit_enqueue_scripts()
{
    // Enqueue main script file
    wp_enqueue_script('my-lit-plugin-script', plugin_dir_url(__FILE__) . 'buildRollup/index.js', array(), null, true);
}
add_action('wp_enqueue_scripts', 'my_lit_enqueue_scripts');

// Ensure the script is loaded as a module
function wpdocs_load_module($tag, $handle)
{
    if ('my-lit-plugin-script' === $handle) {
        $tag = str_replace('<script ', '<script type="module" ', $tag);
    }

    return $tag;
}
add_filter('script_loader_tag', 'wpdocs_load_module', 10, 2);

// Render the shortcode with dynamic ID
function render_web_sense_shortcode($atts)
{
    $atts = shortcode_atts(
        array(
            'id' => '', // Default ID is empty
        ),
        $atts,
        'web-sense'
    );

    ob_start();
    ?>
    <div id="web-sense-container">
        <!-- Render your Lit.js component here -->
        <web-sense id="<?php echo esc_attr($atts['id']); ?>"></web-sense>
    </div>
    <?php
    return ob_get_clean();
}
add_shortcode('web-sense', 'render_web_sense_shortcode');
?>
