<?php
$destino = "jmdg20@gmail.com";
$name = $_POST["name"];
$email = $_POST["email"];
$phone = $_POST["phone"];
$message = $_POST["message"];
$contenido = "Nombre: ". $name . "\nCorreo: " . $email . "\nTelefono: " . $phone . "\nMensaje: " . $message;
mail($destino,"Contacto",$contenido);
header("Location:gracias.html");

?>