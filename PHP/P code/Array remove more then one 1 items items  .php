<?php


     $author = array("charles", "sounyadip","willam","Mark Twain");
    
	  echo "before delete <br>". $author; //
	 print_r($author);//ArrayArray ( [0] => charles [1] => sounyadip [2] => willam [3] => Mark Twain )
	echo " <br> after delete <br>";
 	unset($author[2],$author[0]); //Array ( [1] => sounyadip [3] => Mark Twain )
	print_r($author);
	echo " <br> and after delete hole array <br>";
	unset($author);
	
	?>