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
        
        $sql = "SELECT * FROM maestro";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $records = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($records); 
        break;

    case "POST":
       
        if (isset($_POST['new_username']) && !isset($_POST['update']) && !isset($_POST['delete'])) {
        //if (isset($_POST['new_username'])) {   
            $new_username = $_POST['new_username'];
            $new_password = $_POST['new_password'];
            $new_role = $_POST['new_role'];
            $new_remarks = $_POST['new_remarks'];
            $created_date = date('Y-m-d H:i:s'); 
            
            $check_sql = "SELECT * FROM maestro WHERE username = :username";
            $check_stmt = $conn->prepare($check_sql);
            $check_stmt->bindParam(':username', $new_username);
            $check_stmt->execute();

            if ($check_stmt->rowCount() > 0) {
                $response = ['status' => 0, 'message' => 'Username already exists!'];
            } else {
                
                $insert_sql = "INSERT INTO maestro (username, password, role, remarks, CreatedDate) VALUES (:username, :password, :role, :remarks, :created_date)";
                $insert_stmt = $conn->prepare($insert_sql);
                $insert_stmt->bindParam(':username', $new_username);
                $insert_stmt->bindParam(':password', $new_password);
                $insert_stmt->bindParam(':role', $new_role);
                $insert_stmt->bindParam(':remarks', $new_remarks);
                $insert_stmt->bindParam(':created_date', $created_date);

                if ($insert_stmt->execute()) {
                    $response = ['status' => 1, 'message' => 'New record added successfully!'];
                } else {
                    $response = ['status' => 0, 'message' => 'Error adding record.'];
                }
            }
            echo json_encode($response); 
        }

        
        if (isset($_POST['update'])) {
            $select_username = $_POST['select_username']; 
            $new_username = $_POST['new_username'];      
            $new_password = $_POST['new_password'];
            $new_role = $_POST['new_role'];
            $new_remarks = $_POST['new_remarks'];

        
            $check_sql = "SELECT * FROM maestro WHERE username = :username";
            $check_stmt = $conn->prepare($check_sql);
            $check_stmt->bindParam(':username', $select_username);
            $check_stmt->execute();
            
            if ($check_stmt->rowCount() > 0) {
                
                if (!empty($new_username)) {
                    $update_sql = "UPDATE maestro SET username = :new_username, password = :new_password, role = :new_role, remarks = :new_remarks WHERE username = :select_username";
                    $update_stmt = $conn->prepare($update_sql);
                    $update_stmt->bindParam(':new_username', $new_username);
                } else {
                    $update_sql = "UPDATE maestro SET password = :new_password, role = :new_role, remarks = :new_remarks WHERE username = :select_username";
                    $update_stmt = $conn->prepare($update_sql);
                }
                
                $update_stmt->bindParam(':new_password', $new_password);
                $update_stmt->bindParam(':new_role', $new_role);
                $update_stmt->bindParam(':new_remarks', $new_remarks);
                $update_stmt->bindParam(':select_username', $select_username);

                if ($update_stmt->execute()) {
                    $response = ['status' => 1, 'message' => 'Record updated successfully!'];
                } else {
                    $response = ['status' => 0, 'message' => 'Error updating record.'];
                }
            } else {
                
                $response = ['status' => 0, 'message' => 'Username does not exist!'];
            }

            echo json_encode($response); 
        }

        
        if (isset($_POST['delete'])) {
            $delete_username = $_POST['delete_username'];

            
            $delete_sql = "DELETE FROM maestro WHERE username = :username";
            $delete_stmt = $conn->prepare($delete_sql);
            $delete_stmt->bindParam(':username', $delete_username);

            if ($delete_stmt->execute()) {
                if ($delete_stmt->rowCount() > 0) {
                    $response = ['status' => 1, 'message' => 'Record deleted successfully!'];
                } else {
                    $response = ['status' => 0, 'message' => 'Username not found.'];
                }
            } else {
                $response = ['status' => 0, 'message' => 'Error deleting record.'];
            }

            echo json_encode($response); 
        }
        

if (isset($_FILES['csvFile']) && $_FILES['csvFile']['error'] === UPLOAD_ERR_OK) {
    $fileTmpPath = $_FILES['csvFile']['tmp_name'];
    $fileName = $_FILES['csvFile']['name'];
    $fileSize = $_FILES['csvFile']['size'];
    $fileType = $_FILES['csvFile']['type'];
    $fileExtension = pathinfo($fileName, PATHINFO_EXTENSION);

    if ($fileExtension === 'csv') {
        if (($handle = fopen($fileTmpPath, "r")) !== false) {
            
            fgetcsv($handle);
            fgetcsv($handle);

            $successCount = 0;
            $errorCount = 0;

            while (($data = fgetcsv($handle, 1000, ",")) !== false) {
                
                $username = $data[2];
                $password = $data[3];
                $role = $data[4];
                $remarks = $data[6];
                $createdDate = date('Y-m-d H:i:s'); 

                $sql = "INSERT INTO maestro (username, password, role, remarks, CreatedDate) 
                        VALUES (:username, :password, :role, :remarks, :created_date)";
                $stmt = $conn->prepare($sql);

                $stmt->bindParam(':username', $username);
                $stmt->bindParam(':password', $password);
                $stmt->bindParam(':role', $role);
                $stmt->bindParam(':remarks', $remarks);
                $stmt->bindParam(':created_date', $createdDate);

                if ($stmt->execute()) {
                    $successCount++;
                } else {
                    $errorCount++;
                }
            }
            fclose($handle);

            $response = [
                'status' => 1,
                'message' => "$successCount records imported successfully. $errorCount records failed."
            ];
        } else {
            $response = [
                'status' => 0,
                'message' => 'Error opening the uploaded CSV file.'
            ];
        }
    } else {
        $response = [
            'status' => 0,
            'message' => 'Please upload a valid CSV file.'
        ];
    }

    echo json_encode($response); 
}





if (isset($_POST['delete_all'])) {
    try {
        
        $sql = "TRUNCATE TABLE maestro";
        $stmt = $conn->prepare($sql);

        if ($stmt->execute()) {
            $response = [
                'status' => 1,
                'message' => 'All records have been deleted successfully.',
            ];
        } else {
            
            $response = [
                'status' => 0,
                'message' => 'Failed to delete records. Please try again.',
            ];
        }
    } catch (PDOException $e) {
        
        $response = [
            'status' => 0,
            'message' => 'Error deleting records: ' . $e->getMessage(),
        ];
    } catch (Exception $e) {
        
        $response = [
            'status' => 0,
            'message' => 'Unexpected error: ' . $e->getMessage(),
        ];
    }

    echo json_encode($response);
}





if (isset($_POST['username']) && isset($_POST['password'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];


    $login_sql = "SELECT * FROM maestro WHERE username = :username";
    $login_stmt = $conn->prepare($login_sql);
    $login_stmt->bindParam(':username', $username);
    $login_stmt->execute();
    $user = $login_stmt->fetch(PDO::FETCH_ASSOC);

    if ($user) {
       
        if ($password === $user['password']) {  
            $response = ['status' => 1, 'message' => 'Login successful'];
        } else {
            $response = ['status' => 0, 'message' => 'Invalid username or password'];
        }
    } else {
        $response = ['status' => 0, 'message' => 'Invalid username or password'];
    }

    echo json_encode($response);
} else {
    
    $response = ['status' => 0, 'message' => 'Username and password are required'];
    echo json_encode($response);
}








        break;
}
?>
