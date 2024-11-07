<?php
// cart.php
require 'config.php';
header('Content-Type: application/json');

// GET: Get all items in the cart for a user (user_id passed as a query parameter)
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['user_id'])) {
    $user_id = intval($_GET['user_id']);
    $stmt = $conn->prepare("SELECT cart_items.id, products.name, products.price, cart_items.quantity FROM cart_items JOIN products ON cart_items.product_id = products.id WHERE cart_items.user_id = ?");
    $stmt->bind_param("i", $user_id);
    $stmt->execute();
    $result = $stmt->get_result();
    echo json_encode($result->fetch_all(MYSQLI_ASSOC));
}

// POST: Add an item to the cart
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    $stmt = $conn->prepare("INSERT INTO cart_items (user_id, product_id, quantity) VALUES (?, ?, ?)");
    $stmt->bind_param("iii", $data->user_id, $data->product_id, $data->quantity);
    if ($stmt->execute()) {
        echo json_encode(["message" => "Item added to cart"]);
    } else {
        echo json_encode(["message" => "Failed to add item"]);
    }
}

// DELETE: Remove an item from the cart
if ($_SERVER['REQUEST_METHOD'] === 'DELETE' && isset($_GET['id'])) {
    $id = intval($_GET['id']);
    $stmt = $conn->prepare("DELETE FROM cart_items WHERE id = ?");
    $stmt->bind_param("i", $id);
    if ($stmt->execute()) {
        echo json_encode(["message" => "Item removed from cart"]);
    } else {
        echo json_encode(["message" => "Failed to remove item"]);
    }
}
?>
