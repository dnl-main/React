<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST");

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch($method) {

    case 'GET':
        $sql = "SELECT * FROM users";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($users);
        break;

    case "POST":
        $user = json_decode(file_get_contents('php://input'));
        $sql =  "INSERT INTO users (name, email, mobile, password, created_at) VALUES (:name, :email, :mobile, :password, :created_at)";
        $stmt = $conn->prepare($sql);
        
        $created_at = date('Y-m-d'); 
        $stmt->bindParam(':name', $user->name);
        $stmt->bindParam(':email', $user->email);
        $stmt->bindParam(':mobile', $user->mobile);
        $stmt->bindParam(':password', $user->password);
        $stmt->bindParam(':created_at', $created_at); 

        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'User created successfully'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to create user'];
        }

        echo json_encode($response);
        break;
}
?>
