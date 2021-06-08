<?php
    session_start();
 ?>

<!DOCTYPE html>
<html lang="ro">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>ParfumeShopify SignUp</title>
	<link rel="stylesheet" href="style_index.css">
</head>
<body>
    <div class="header">
        <div class="fancy-text">
            <div class="title-text">
                <span class="letters">P</span>
                <span class="letters">a</span>
                <span class="letters">r</span>
                <span class="letters">f</span>
                <span class="letters">u</span>
                <span class="letters">m</span>
                <span class="letters">e</span>
                <span class="letters">S</span>
                <span class="letters">h</span>
                <span class="letters">o</span>
                <span class="letters">p</span>
                <span class="letters">i</span>
                <span class="letters">f</span>
                <span class="letters">y</span>
            </div>

            </div>


        </div>

        <div class="topnav" id="myTopnav">
            <a href="index.html">Home</a>
						<a href="produse.html">Produse</a>
            <a href="#Categories">News</a>
						<a href="contact.html">Contact</a>
            <a href="about.html">About</a>

						<?php
							if(!isset($_SESSION['id']))
								echo'
	    					<a href="signup.php" id="sup">Sign Up</a>
	    					<a href="login.php" id="lin" class="active">Log In</a>
								<a id="naccount" href="signup.php"> Nu aveți cont? Înregistrați-vă.</a>';
							else
							  echo '
								<form action="Include/logoutaction.php">
								<input type ="submit" value="Log Out" style="float: right; background-color: #333; display: block; color: #807a7a; text-align: center; padding: 14px 16px; text-decoration: none; font-size: 17px;" >';
						?>
				</div>
	<div class="card">

	  <?php
				if (!isset($_SESSION['id'])) {
					if(isset($_GET['info']) && $_GET['info'] == 'notok') {
						echo '<p style="text-align: center; font-size: 24px; color: red; font-weight: bold;"> Parola sau email nepotrivite!</p>';
					} ?>
					<h1 class = "pgtitle">Log In</h1>
					<div id="loginform">
					<form method="POST" action="Include/loginaction.php">
				  		<input type="email" class="formcontrol" name="nickn" placeholder="Email" required
							oninvalid="setCustomValidity('Email in format invalid. Incercati din nou.')"
				   			oninput="setCustomValidity('')">
				  		<input type="password" class="formcontrol" name="passw" placeholder="Password" maxlength="30" pattern="[a-zA-Z0-9]{8,30}" required
							oninvalid="setCustomValidity('Parola in format invalid. Incercati din nou.')"
				   			oninput="setCustomValidity('')">
				  		<button class="submit" type = "submit">Log In</button>
					</form>
				</div>
			<?php }
    else {
			echo '<p style="text-align: center; font-size: 48px; color: green; font-weight: bold;">Bun venit, '.$_SESSION['fname'].'</p>';
 			if(isset($_GET['info']) && $_GET['info'] == 'ok'){
				echo '<p style="text-align: center; font-size: 24px; color: green; font-weight: bold;"> Contul a fost creat cu succes!</p>';
			}
		}
	?>


</div>
</body>
</html>
				<?php //echo '<p style="text-align: center; font-size: 24px; color: green; font-weight: bold;">Bun venit, '.$_SESSION['fname'].'</p>'; ?>
