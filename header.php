<?php
  $current_time = time();
  $json_opts = JSON_HEX_QUOT | JSON_NUMERIC_CHECK | JSON_PRETTY_PRINT | JSON_HEX_TAG;

  // Read existing tweet file contents
  $tweet_file = dirname(__FILE__) . '/social/tweets.json';
  $tweet_file_contents = json_decode(file_get_contents($tweet_file), true);

  $TWITTER_TOKEN_CLIENT = 'DhdImlupGlIPXWRVQGtUSQ';
  $TWITTER_TOKEN_SECRET = 'U5G64tQdVen6JNUWjOCjPMp0Qo11Dz5gXUOzlH1w';

  if ($tweet_file_contents) {
    $last_edited = $tweet_file_contents['last_updated'];
  }

  // If the file was previously edited, we want to make sure it's been 5
  // minutes since we last pinged twitter before writing to it.
  if (!isset($last_edited) || $current_time > ($last_edited + 300)) {

    // Set the token and secret
    require_once('social/tweet_client.php');

    $twitter_client = new TweetClient();
    $twitter_client->authenticate_bearer($TWITTER_TOKEN_CLIENT, $TWITTER_TOKEN_SECRET);

    // Then, get the latest tweet.
    $get_time = time();
    $timeline = $twitter_client->fetch_user_timeline('eleveninc', array('exclude_replies' => 'true'));

    function parse_twitter_timeline ($timeline) {
      $result = array();

      foreach ($timeline as $tweet) {
        $post = array();

        $post['created_at'] = $tweet['created_at'];
        $post['id'] = $tweet['id'];
        $post['user'] = array(
          'name' => $tweet['user']['name'],
          'screen_name' => $tweet['user']['screen_name'],
        );
        $post['permalink'] = 'https://twitter.com/' . $post['user']['screen_name'] . '/status/' . $post['id'];

        // Parse the actual tweet
        $tweet_text = $tweet['text'];
        preg_match_all('/@\w+/', $tweet_text, $tweet_usernames);
        preg_match_all('/#\w+/', $tweet_text, $tweet_hashtags);
        preg_match_all('/https?:\/\/\S+/', $tweet_text, $tweet_urls);

        if (isset($tweet_usernames[0])) {
          foreach ($tweet_usernames[0] as $username) {
            $tweet_text = str_replace($username, '<a href="https://twitter.com/' . substr($username, 1) . '" target="_blank">' . $username . '</a>', $tweet_text);
          }
        }
        if (isset($tweet_hashtags[0])) {
          foreach ($tweet_hashtags[0] as $hashtag) {
            $tweet_text = str_replace($hashtag, '<a href="https://twitter.com/search?q=%23' . substr($hashtag, 1) . '&amp;src=hash" target="_blank"><b>#</b>' . substr($hashtag, 1) . '</a>', $tweet_text);
          }
        }
        if (isset($tweet_urls[0])) {
          foreach ($tweet_urls[0] as $url) {
            $tweet_text = str_replace($url, '<a href="' . $url . '" target="_blank">' . $url . '</a>', $tweet_text);
          }
        }
        $post['text'] = $tweet_text;

        array_push($result, $post);
      }

      return $result;
    }

    // Build the JSON file and save it.
    // Do note that your webserver does need write access to the output file.
    $json = array(
      'last_updated' => $get_time,
      'tweets' => parse_twitter_timeline($timeline)
    );
    file_put_contents($tweet_file, json_encode($json, $json_opts));
  }
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

  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD8dbPPwL_7pW1WLKaW3GPm3kNlW1Ucahk&signed_in=true&libraries=places"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js"></script>
  <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,600,700" rel="stylesheet">
  <?php wp_head();?>



<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-75806038-1', 'auto');
  //ga('send', 'pageview');

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
          <a class="desktop-nav--logo" title="<?php echo bloginfo('name'); ?>" href="/#/"><?php echo bloginfo('name'); ?></a>
          <a class="desktop-nav--log-in" title="<?php echo bloginfo('name'); ?>" href="/#/">Log In</a>
          <button class="desktop-nav--cta cta">Sign up</button>
          <ul class="desktop-nav--main">
            <li class="desktop-nav--main__sub-wrapper"><a ui-sref="what-we-do" ng-class="{active: $state.current.activetab == 'what-we-do'}">Features</a>
              <ul class="desktop-nav--main__sub">
                <li><a ui-sref="earthy-dna" ng-class="{active: $state.current.activetab == 'earthy-dna'}">earthly(DNA)</a></li>
                <li><a ui-sref="portfolio" ng-class="{active: $state.current.activetab == 'portfolio'}">Portfolio</a></li>
                <li><a ui-sref="security" ng-class="{active: $state.current.activetab == 'security'}">Security</a></li>
              </ul>
            </li>
            <li><a ui-sref="our-work" ng-class="{active: $state.current.activetab == 'our-work'}">FAQs</a></li>
            <li><a ui-sref="about-us" ng-class="{active: $state.current.activetab == 'about-us'}">Library</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</header>

<nav class="mobile-nav">
    <div class="mobile-nav-background"></div>
    <ul class="mobile-nav--main">
      <li><a ui-sref="what-we-do">What We Do</a></li>
      <li><a ui-sref="our-work">Our Work</a></li>
      <li><a ui-sref="about-us">About Us</a></li>
      <li><a ui-sref="news">News</a></li>
      <li><a ui-sref="contact">Contact</a></li>
    </ul>
    <ul class="mobile-nav--social">
      <li><a class="header-nav--facebook" href="https://www.facebook.com/ElevenInc" target="_blank">Facebook</a></li>
      <li><a class="header-nav--twitter" href="https://twitter.com/eleveninc" target="_blank">Twitter</a></li>
      <li><a class="header-nav--instagram" href="https://instagram.com/eleveninc" target="_blank">Instagram</a></li>
    </ul>
</nav>
