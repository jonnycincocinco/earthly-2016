<?php

/**
 * TweetClient
 *
 * A simple Twitter client.
 *
 * @author Jake Bellacera
 */

class TweetClient
{
  protected $twitter_api_base_url = "https://api.twitter.com";
  protected $twitter_api_version = "1.1";
  private $bearer_token;

  /* Public: Authenticates via the application-only method.
   *   https://dev.twitter.com/docs/auth/application-only-auth
   *
   * $client_token - The String application client token.
   * $secret_token - The String application secret token.
   *
   * Returns true if authenticated successfully.
   */
  public function authenticate_bearer ($client_token, $secret_token) {
    $ch = curl_init('https://api.twitter.com/oauth2/token');

    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/x-www-form-urlencoded;charset=UTF-8'));
    curl_setopt($ch, CURLOPT_HEADER, 1);
    curl_setopt($ch, CURLOPT_USERPWD, $client_token . ":" . $secret_token);
    curl_setopt($ch, CURLOPT_TIMEOUT, 30);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, 'grant_type=client_credentials');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);

    $response = curl_exec($ch);

    curl_close($ch);

    list($header, $body) = explode("\r\n\r\n", $response, 2);

    $this->bearer_token = json_decode($body)->access_token;

    if (isset($this->bearer_token)) {
      return true;
    } else {
      return false;
    }
  }

  /* Public: Fetches a user's timeline.
   *
   * $screen_name - The String Twitter user's screen name.
   * $options - An associative array of key/value options. Default: empty array.
   *
   * Returns a parsed JSON twitter timeline.
   */
  public function fetch_user_timeline ($screen_name, $options = array()) {
    $default_params = array('screen_name' => $screen_name);
    return $this->perform_get_api_action('statuses/user_timeline.json', array_merge($default_params, $options));
  }


  /* Private: Performs a GET API action on a specific endpoint.
   *
   * $endpoint - The string endpoint URL.
   * $params - The associative array of key/val URL query params. Default: empty array.
   *
   * Returns the parsed JSON response.
   */
  private function perform_get_api_action ($endpoint, $params) {
    $get_url = $this->twitter_api_base_url . '/' . $this->twitter_api_version . '/' . $endpoint . '?' . $this->build_url_query_string($params);

    $ch = curl_init($get_url);

    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Authorization: Bearer ' . $this->bearer_token));
    curl_setopt($ch, CURLOPT_HEADER, 1);
    curl_setopt($ch, CURLOPT_TIMEOUT, 30);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);

    $response = curl_exec($ch);

    curl_close($ch);

    list($header, $body) = explode("\r\n\r\n", $response, 2);

    return json_decode($body, true);
  }

  /* Private: Builds a URL-safe query string.
   *
   * $params - An associative array of key/val parameters. Default: empty array.
   *
   * Returns the escaped URL query string.
   */
  private function build_url_query_string ($params = array()) {
    return http_build_query($params);
  }
}
