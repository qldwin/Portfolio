<?php

if (isset($_GET['page'])) {
  switch ($_GET['page']) {
    // index.php?page=accueil
    case 'accueil':
      require 'controller/accueil.php';
      break;

  }

} else {
  header('Location: index.php?page=accueil');
}











