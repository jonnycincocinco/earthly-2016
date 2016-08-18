<?php
  $current_time = time();
  $json_opts = JSON_HEX_QUOT | JSON_NUMERIC_CHECK | JSON_PRETTY_PRINT | JSON_HEX_TAG;
?>

<!doctype html>
<!--[if lt IE 7]>      <html <?php language_attributes(); ?> ng-app="Earthly" class="no-js lt-ie10 lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html <?php language_attributes(); ?> ng-app="Earthly" class="no-js lt-ie10 lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html <?php language_attributes(); ?> ng-app="Earthly" class="no-js lt-ie10 lt-ie9"> <![endif]-->
<!--[if IE 9]>         <html <?php language_attributes(); ?> ng-app="Earthly" class="no-js lt-ie10"> <![endif]-->
<!--[if gt IE 9]><!--> <html <?php language_attributes(); ?> ng-app="Earthly" class="no-js gte-ie10"> <!--<![endif]-->
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
  <meta name="description" content="Eleven is a creative marketing agency that specializes in innovative advertising, design, and brand identity.">
  <meta name="author" content="Eleven, Inc.">

  <link rel="shortcut icon" href="wp-content/themes/earthly-2016/build/images/icons/favicon.ico">
  <link rel="apple-touch-icon" sizes="76x76" href="wp-content/themes/earthly-2016/build/images/icons/apple-touch-icon-76x76.png">
  <link rel="apple-touch-icon" sizes="120x120" href="wp-content/themes/earthly-2016/build/images/icons/apple-touch-icon-120x120.png">
  <link rel="apple-touch-icon" sizes="152x152" href="wp-content/themes/earthly-2016/build/images/icons/apple-touch-icon-152x152.png">
  <link rel="apple-touch-icon" sizes="180x180" href="wp-content/themes/earthly-2016/build/images/icons/Eapple-touch-icon-180x180.png">

  <title><?php wp_title('&laquo;', true, 'right'); ?> <?php bloginfo('name'); ?></title>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js"></script>
  <?php wp_head();?>


</head>
<body class="{{bodylayout}}" ng-cloak>

<header>
  <nav class="desktop-nav">
    <div class="container">
      <div class="grid">
        <div class="grid__item">
          <a class="desktop-nav--mobile-toggle" title="Toggle Menu" href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </a>
          <a class="desktop-nav--logo" title="<?php echo bloginfo('name'); ?>" href="/#/earthly"><?php echo bloginfo('name'); ?></a>
          <ul class="desktop-nav--main">
            <li class="desktop-nav--main__sub-wrapper"><a ui-sref="earthy-dna" ng-class="{active: $state.current.activetab == ''}">Features</a>
              <ul class="desktop-nav--main__sub">
                <li><a ui-sref="earthy-dna" ng-class="{active: $state.current.activetab == 'earthy-dna'}">earthly(DNA)</a></li>
                <li><a ui-sref="portfolio" ng-class="{active: $state.current.activetab == 'portfolio'}">Portfolio</a></li>
                <li><a ui-sref="security" ng-class="{active: $state.current.activetab == 'security'}">Security</a></li>
              </ul>
            </li>
            <li><a ui-sref="our-work" ng-class="{active: $state.current.activetab == 'our-work'}">FAQs</a></li>
            <li><a ui-sref="about-us" ng-class="{active: $state.current.activetab == 'about-us'}">Library</a></li>
            <li>
            <button class="desktop-nav--cta cta">Sign up</button>
            </li>
            <li><a class="" title="<?php echo bloginfo('name'); ?>" href="/#/">Log In</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</header>

<nav class="mobile-nav">
    <div class="mobile-nav-background"></div>
    <ul class="mobile-nav--main">
      <li><a ui-sref="earthy-dna">earthly(DNA)</a></li>
    </ul>
</nav>
