<?php

include 'assets/include.php';

echo "<pre>";
print_r($_POST);
echo "</pre>";

echo $_POST['author'];

?>
<!DOCTYPE html>
<html>
    <head>
        <title>PHP Fundamentals</title>
		<link href="assets/styles.css" rel="stylesheet" type="text/css" />
    </head>
    <body>
		<div id="Header">
			<img src="assets/Dickens_Gurney_head.jpg" border="0" alt="">
			<h2>
				Mailing List Information
			</h2>
		</div>        
        <div id="Body">
            <div>
                <label>Favorite Author:</label> 
                <span><?=$_POST['author']?></span>
            </div>		
            <div>
                <label>Favorite Century:</label>
                <span><?=$_POST['century']?></span>
            </div>
            <div>
                <label>Comments:</label>
                <span><?=$_POST['comments']?></span>
            </div>
            <div>
                <label>Name:</label>
                <span><?=$_POST['name']?></span>
            </div>
            <div>
                <label>E-mail Address:</label>
                <span><?=$_POST['email']?></span>
            </div>
            <div>
                <label>Receive Newsletter:</label>
                <span><?=$_POST['newsletter']?></span>
            </div>
        </div>
	</body>
</html>