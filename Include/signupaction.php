<?php

 require 'conectare.php';

 $fname = $_POST['fname'];
 $lname = $_POST['lname'];
 $gender = $_POST['gender'];
 $email = $_POST['email'];
 $password = $_POST['password'];

 $password_h = password_hash($password, PASSWORD_DEFAULT);

 $sql = $connect->prepare("SELECT email FROM users WHERE email = ?");
 $sql -> bind_param("s", $email);
 $sql -> execute();

 $result = $sql -> get_result();
 $sql -> close();

 if($result -> num_rows > 0) {
   header("Location: ../signup.php?info=eroare");
   echo "<p>EMAIL DUPLICAT</p>";
 }

else {
 $sql = $connect -> prepare("INSERT INTO users (Fname, Lname, Gender, email, password) VALUES (?, ?, ?, ?, ?)");
 $sql -> bind_param("sssss", $fname, $lname, $gender, $email, $password_h);
 $sql -> execute();

 header("Location: ../login.php?info=ok");
}
