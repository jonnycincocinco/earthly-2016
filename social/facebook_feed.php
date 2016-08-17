<?php
  // Proxying the FB OG request since it doesn't allow cross domains.
  $url = "https://graph.facebook.com/v2.2/131616536904035/feed?access_token=1572076416369948|ae85540cf93acea126fce592193d89b7";
  header('Content-Type: application/json');
  echo file_get_contents($url);
