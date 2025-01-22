<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // Allow requests from any origin (for development)

include 'DbConnect.php'; // Include your DbConnect class

$db = new DbConnect();
$conn = $db->connect();

$query = "SELECT * FROM maestro";
$stmt = $conn->prepare($query);

if ($stmt->execute()) {
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC); // Fetch all records as associative array
    echo json_encode($result); // Return JSON-encoded data
} else {
    echo json_encode(["message" => "No records found."]);
}
?>
