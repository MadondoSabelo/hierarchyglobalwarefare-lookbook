<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Set the recipient email address
    $to = nntokozo@gmail.com';

    // Set the email subject
    $subject = 'New Contact Form Submission';

    // Build the email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    // Build the email headers
    $headers = "From: $name <$email>";

    // Send the email
    if (mail($to, $subject, $email_content, $headers)) {
        // Email sent successfully
        echo '<p>Thank you for your message. We will get back to you soon!</p>';
    } else {
        // Error sending email
        echo '<p>Sorry, an error occurred. Please try again later.</p>';
    }
}
?>
