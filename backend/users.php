<?php
// users.php
require 'config.php';
header('Content-Type: application/json');

// POST: Register a new user
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_GET['action']) && $_GET['action'] === 'register') {
    $data = json_decode(file_get_contents("php://input"));
    $passwordHash = password_hash($data->password, PASSWORD_BCRYPT);
    $stmt = $conn->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
    $stmt->bind_param("ss", $data->username, $passwordHash);
    if ($stmt->execute()) {
        echo json_encode(["message" => "User registered successfully"]);
    } else {
        echo json_encode(["message" => "Registration failed"]);
    }
}

// POST: Login an existing user
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_GET['action']) && $_GET['action'] === 'login') {
    $data = json_decode(file_get_contents("php://input"));
    $stmt = $conn->prepare("SELECT id, password FROM users WHERE username = ?");
    $stmt->bind_param("s", $data->username);
    $stmt->execute();
    $result = $stmt->get_result();
    $user = $result->fetch_assoc();
    
    if ($user && password_verify($data->password, $user['password'])) {
        echo json_encode(["message" => "Login successful", "user_id" => $user['id']]);
    } else {
        echo json_encode(["message" => "Invalid username or password"]);
    }
}
?>
