<?php
 use PHPMailer\PHPMailer\PHPMailer;

 use PHPMailer\PHPMailer\SMTP;

 use PHPMailer\PHPMailer\Exception;


 require_once __DIR__ . '/PHPMailer/src/Exception.php';
 require_once __DIR__ . '/PHPMailer/src/PHPMailer.php';
 require_once __DIR__ . '/PHPMailer/src/SMTP.php';

function sendMail($destinataire, $replyTo, $messageAuthor, $messageContent){
    $mail = new PHPMailer(true);

    $mail->SMTPDebug = 2;

    $mail->isSMTP();
    $mail->Username = $_ENV['MAIL_USERNAME'];
    $mail->Password = $_ENV['MAIL_PASSWORD'];
    echo $mail->Username;
    echo $mail->Password;
    
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = 'tls';
    $mail->Host = "smtp-aldwinw.alwaysdata.net";
    $mail->Port = 587; 


    $mail->From = "aldwinw@alwaysdata.net";
    $mail->FromName = "Portoflio";


    $mail->addAddress($destinataire, $destinataire);

    $mail->isHTML(true);

    $mail->Subject = "[Portolio] Nouvelle demande de contact";
    $mail->AddReplyTo($replyTo);
    $mail->Body = "Message de : " . $messageAuthor . '<br> Contenu du message: ' . $messageContent;

    $mail->AltBody = "";


    try {

        $mail->send();

        //echo "Message has been sent successfully";
        header('Location: ../index.php?page=accueil');

    } catch (Exception $e) {

        echo "Mailer Error: " . $mail->ErrorInfo;
        header('Location: ../index.php?page=accueil');

    }
}