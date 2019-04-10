<?php

	$name = trim($_POST['name']);
	$email = trim($_POST['email']);
	$phone = trim($_POST['phone']);
	
	$emailTo = 'piotr.osmola@gmail.com'; //Put your own email address here

	$body = "Name: $name \n\nEmail: $email \n\nPhone: $phone";
	$headers = 'From: '.$email."\r\n" .
        'Reply-To: '.$email."\r\n";

	mail($emailTo, $subject, $body, $headers);
	$emailSent = true;
	echo ('success');
	
?>
