<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Vérification des champs vides
    if (empty($_POST['nom']) || empty($_POST['email']) || empty($_POST['message'])) {
        $_SESSION['alert'] = "Tous les champs sont obligatoires.";
    } else {
        $nom = $_POST['nom'];
        $email = $_POST['email'];
        $message = $_POST['message'];

        // Vérification de la syntaxe de l'email
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $_SESSION['alert'] = "L'adresse e-mail n'est pas valide.";
        } else if (strlen($message) < 50) {
            $_SESSION['alert'] = "Le message doit faire au moins 50 caractères.";
        } else {
            $to = "aldwin.weber54@gmail.com";
            $subject = "Nouveau message de $nom";
            $body = "Nom: $nom\nEmail: $email\nMessage: $message";

            if (mail($to, $subject, $body)) {
                $_SESSION['alert_class'] = "alert-success"; // Classe pour l'alerte verte
                $_SESSION['alert'] = "Votre message a été envoyé avec succès.";
            } else {
                $_SESSION['alert_class'] = "alert-danger"; // Classe pour l'alerte rouge
                $_SESSION['alert'] = "Une erreur s'est produite lors de l'envoi du message.";
            }
        }
    }
    header("Location: ../index.php?page=accueil"); // Redirection vers la page index
    exit();
}
