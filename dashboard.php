<!-- dashboard.php -->
<?php
// Verifica se os dados foram enviados
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = htmlspecialchars($_POST['email']);
    $password = htmlspecialchars($_POST['password']);
    $confirmPassword = htmlspecialchars($_POST['confirm-password']);

    // Exibindo os dados
    echo "<!DOCTYPE html>";
    echo "<html lang='pt-BR'>";
    echo "<head>";
    echo "<meta charset='UTF-8'>";
    echo "<meta name='viewport' content='width=device-width, initial-scale=1.0'>";
    echo "<title>Painel de Controle</title>";
    echo "</head>";
    echo "<body>";
    echo "<h1>Bem-vindo!</h1>";
    echo "<p>Email: $email</p>";
    echo "<p>Senha: $password</p>"; // Em uma aplicação real, NUNCA exiba a senha
    echo "<p>Confirmação de Senha: $confirmPassword</p>"; // Em uma aplicação real, NUNCA exiba a senha
    echo "</body>";
    echo "</html>";
} else {
    echo "Por favor, faça o login.";
}
?>
