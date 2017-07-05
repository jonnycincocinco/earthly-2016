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
  <meta name="description" content="Earthly offers investment advisory and management services based on the principles of passive investment management, sustainable investing and socially responsible investing in order to provide a low-cost and sustainable investment platform for individual investors and institutions.">
  <meta name="author" content="">
  <meta property="og:type" content="website"/>
  <meta property="og:title" content="Earthly - Sustainable Investment Management and Advice"/>
  <meta property="og:image" content="/wp-content/themes/earthly-2016/build/images/global/earthly.png"/>
  <meta property="og:description" content="Earthly offers investment advisory and management services based on the principles of passive investment management, sustainable investing and socially responsible investing in order to provide a low-cost and sustainable investment platform for individual investors and institutions."/>
  <meta property="og:url" content="https://www.beearthly.com/#!/" />
  <link rel="icon" type="image/png" href="wp-content/themes/earthly-2016/build/images/icons/favicon-32x32.png" sizes="32x32">
  <link rel="icon" type="image/png" href="wp-content/themes/earthly-2016/build/images/icons/favicon-16x16.png" sizes="16x16">
  <link rel="apple-touch-icon" sizes="76x76" href="wp-content/themes/earthly-2016/build/images/icons/apple-touch-icon-76x76.png">
  <link rel="apple-touch-icon" sizes="120x120" href="wp-content/themes/earthly-2016/build/images/icons/apple-touch-icon-120x120.png">
  <link rel="apple-touch-icon" sizes="152x152" href="wp-content/themes/earthly-2016/build/images/icons/apple-touch-icon-152x152.png">
  <link rel="apple-touch-icon" sizes="180x180" href="wp-content/themes/earthly-2016/build/images/icons/apple-touch-icon-180x180.png">
  <link rel="sitemap" type="application/xml" title="Sitemap" href="https://www.beearthly.com/sitemap.xml" />

  <title><?php wp_title('&laquo;', true, 'right'); ?> <?php bloginfo('name'); ?></title>

  <link href="https://fonts.googleapis.com/css?family=Muli:300,400|Roboto" rel="stylesheet">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js"></script>
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCqj-WoXv8WTFvkh62hpBAPz8kjC0F8YnQ&libraries=places"></script>

  <?php wp_head();?>

    <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-101847635-1', 'auto');
    ga('send', 'pageview');

  </script>


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
            <li class="desktop-nav--main__sub-wrapper"><a ui-sref="services" ng-class="{active: $state.current.activetab == 'services'}">Services</a>
              <ul class="desktop-nav--main__sub">
                <li><a ui-sref="earthly-dna" ng-class="{active: $state.current.activetab == 'earthly-dna'}">Earthly(DNA)</a></li>
                <li><a ui-sref="portfolio" ng-class="{active: $state.current.activetab == 'portfolio'}">Portfolio</a></li>
                <li><a ui-sref="security" ng-class="{active: $state.current.activetab == 'security'}">Security</a></li>
              </ul>
            </li>
            <li><a ui-sref="fees" ng-class="{active: $state.current.activetab == 'fees'}">Fees</a></li>
            <li><a ui-sref="faqs" ng-class="{active: $state.current.activetab == 'faqs'}">FAQs</a></li>
            <li><a ui-sref="library" ng-class="{active: $state.current.activetab == 'library'}">Library</a></li>
            <li><a ui-sref="about-us" ng-class="{active: $state.current.activetab == 'about-us'}">About</a></li>
            <li>
            <button ui-sref="sign-up"  class="desktop-nav--cta cta">Sign Up</button>
            </li>
            <li><a class="" title="<?php echo bloginfo('name'); ?>" href="https://app.beearthly.com/#/login">Log In</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</header>

<nav class="mobile-nav">
    <ul class="mobile-nav--main">
      <li><a ui-sref="services" ng-class="{active: $state.current.activetab == 'services'}">Services</a>
        <ul class="mobile-nav--main__sub">
          <li><a ui-sref="earthly-dna" ng-class="{active: $state.current.activetab == 'earthly-dna'}">Earthly(DNA)</a></li>
          <li><a ui-sref="portfolio" ng-class="{active: $state.current.activetab == 'portfolio'}">Portfolio</a></li>
          <li><a ui-sref="security" ng-class="{active: $state.current.activetab == 'security'}">Security</a></li>
        </ul>
      </li>
      <li><a ui-sref="fees" ng-class="{active: $state.current.activetab == 'fees'}">Fees</a></li>
      <li><a ui-sref="faqs" ng-class="{active: $state.current.activetab == 'faqs'}">FAQs</a></li>
      <li><a ui-sref="library" ng-class="{active: $state.current.activetab == 'library'}">Library</a></li>
      <li><a ui-sref="about-us" ng-class="{active: $state.current.activetab == 'about-us'}">About</a></li>
      <li>
        <a ui-sref="sign-up"><button class="cta">Sign up</button></a>
      </li>
    </ul>
</nav>
