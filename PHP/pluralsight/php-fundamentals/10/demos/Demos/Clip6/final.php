<?php

echo "<pre>";
print_r($_GET);
echo "</pre>";

echo $_GET['author'];

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
                <span> </span>
            </div>		
            <div>
                <label>Favorite Century:</label>
                <span> </span>
            </div>
            <div>
                <label>Comments:</label>
                <span> </span>
            </div>
            <div>
                <label>Name:</label>
                <span> </span>
            </div>
            <div>
                <label>E-mail Address:</label>
                <span> </span>
            </div>
            <div>
                <label>Receive Newsletter:</label>
                <span> </span>
            </div>
        </div>
	</body>
</html>