<?php
// Configurações do banco de dados
$servername = "localhost";
$username = "root";
$password = "Jesus98@";
$dbname = "inscricoes";

// Cria uma conexão com o banco de dados
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica se a conexão foi bem-sucedida
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Obtém dados do formulário
$nome = trim($_POST['nome']);
$email = trim($_POST['email']);
$telefone = trim($_POST['telefone']);
$eventos = isset($_POST['eventos']) ? $_POST['eventos'] : [];

// Valida o nome
if (empty($nome) || !preg_match("/^[a-zA-Z\s]+$/", $nome)) {
    die("Nome inválido.");
}

// Valida o e-mail
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die("Email inválido.");
}

// Valida o telefone
if (!preg_match("/^\d{10,15}$/", $telefone)) {
    die("Telefone inválido.");
}

// Sanitiza os dados
$nome = htmlspecialchars($nome);
$email = htmlspecialchars($email);
$telefone = htmlspecialchars($telefone);

// Serializa a lista de eventos em JSON
$eventos_json = json_encode($eventos);

// Prepara e executa a inserção dos dados na tabela de inscrições
$sql = "INSERT INTO inscricoes (nome, email, telefone, eventos) VALUES (?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssss", $nome, $email, $telefone, $eventos_json);

if ($stmt->execute()) {
    // Redirecionar para a página de sucesso
    header("Location: ../sucesso.html");
    exit;
} else {
    echo "Erro: " . $stmt->error;
}

echo "Valores recebidos: " . implode(", ", $eventos) . "<br>";

// Fecha a declaração e a conexão
$stmt->close();
$conn->close();
?>
