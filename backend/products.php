<?php
require 'config.php';
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $result = $conn->query("SELECT * FROM products");
    $products = $result->fetch_all(MYSQLI_ASSOC);
    echo json_encode($products);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    $stmt = $conn->prepare("INSERT INTO products (name, description, price, image_url) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssds", $data->name, $data->description, $data->price, $data->image_url);
    if ($stmt->execute()) {
        echo json_encode(["message" => "Product added successfully"]);
    } else {
        echo json_encode(["message" => "Failed to add product"]);
    }
}
?>
