<?php

session_start();
$data = Array();



require 'conectare.php';

if(isset($_POST['nickn']) && isset($_POST['passw'])){

  $email = $_POST['nickn'];
  $password = $_POST['passw'];

  $sql = $connect->prepare("SELECT * FROM users WHERE email = ?");
  $sql -> bind_param("s", $email);
  $sql -> execute();

  $result = $sql -> get_result();
  while($row = $result->fetch_array(MYSQLI_NUM))
  {
    $data[] = $row;
  }
  $hash = $data[0][5];

  $verific = password_verify($password, $hash);

  if($verific == 0) {
    header("Location: ../login.php?info=notok");
    die();
  }
  else {
      $_SESSION['id'] = $data[0][0];
      $_SESSION['fname'] = $data[0][1];
      $_SESSION['lname'] = $data[0][2];
      $_SESSION['gender'] = $data[0][3];
      $_SESSION['email'] = $data[0][4];
      header("Location: ../login.php");
  }
  //print_r($data[0][4]);
}


/*$sql = $connect->prepare("SELECT * FROM users WHERE email = ? AND password = ?");
$sql -> bind_param("ss", $email, $hash);
$sql -> execute();
$result = $sql -> get_result();
while($row = $result->fetch_array(MYSQLI_NUM))
{
  $data[] = $row;
}
if(!$data[0]) {
  echo 'Email sau parola nepotrivite.';
}*/
