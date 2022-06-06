add_filter( 'body_class','my_body_classes' );

    function my_body_classes( $classes ) {

    $classes[any] = 'animate-in-ov';

    return $classes;
    }