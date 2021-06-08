<?php
$connect = new mysqli('localhost', 'root', '', 'users');

if($connect->connect_error) {
  die('Conectarea la baza de date a esuat.');
}
$connect->set_charset("utf8mb4");
