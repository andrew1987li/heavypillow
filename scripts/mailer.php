<?php
    // My modifications to mailer script from:
    // http://blog.teamtreehouse.com/create-ajax-contact-form
    // Added input sanitizing to prevent injection

    // Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form fields and remove whitespace.
        $full_name = strip_tags(trim($_POST["full_name"]));
				$full_name = str_replace(array("\r","\n"),array(" "," "),$full_name);

        $email = trim($_POST["email"]);
        $phone = trim($_POST["phone"]);
        $comment = trim($_POST["comment"]);				
		
		$regex = '/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/'; 
		if (!preg_match($regex, $email))
		{
			$email ="";
		} 		

        // Check that data was sent to the mailer.
        if ( empty($full_name) OR !$email) {
            // Set a 400 (bad request) response code and exit.
            //http_response_code(400);
            echo "Oops! Please fill name and valid email and try again.";
            exit;
        }

        // Set the recipient email address.
        // FIXME: Update this to your desired email address.
//        $recipient = "info@pearlsnsilver.com";
        $recipient = "theheavypillow@gmail.com";

        // Set the email subject.
        $subject = "Contact form submited by $full_name";

        // Build the email content.
        $email_content = "Full Name: $full_name\n";
        $email_content .= "Email: $email\n";		
        $email_content .= "Phone: $phone\n";				
        $email_content .= "Comment: $comment\n\n";

        // Build the email headers.
        $email_headers = "From: $full_name <$email>";

        // Send the email.
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            // Set a 200 (okay) response code.
            //http_response_code(200);
            echo "Thank You! Your message has been sent.";
        } else {
            // Set a 500 (internal server error) response code.
            //http_response_code(500);
            echo "Oops! Something went wrong and we couldn't send your message.";
        }

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        //http_response_code(403);
        echo "There was a problem with your submission, please try again.";
    }

?>
