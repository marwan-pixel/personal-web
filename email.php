<?php

   $toEmail = 'marwanhadid6@gmail.com';
       $emailSubject = 'New email from your contact form';
       $headers = ['From' => 'marwanhadid6@gmail.com', 'Reply-To' => 'marwanhadid6@gmail.com', 'Content-type' => 'text/html; charset=utf-8'];
       $bodyParagraphs = ["Name: {Marwan}", "Email: {marwanhadid6@gmail.com}", "Message:", "test"];
       $body = join(PHP_EOL, $bodyParagraphs);
   if ( mail($toEmail, $emailSubject, $body, $headers)) {

           header('Location: thank-you.html');
       } else {
           $errorMessage = 'Oops, something went wrong. Please try again later';
       }
 ?>