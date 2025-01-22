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
        // Fetch all records from the 'maestro' table
        $sql = "SELECT * FROM maestro";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $records = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($records); // Return records in JSON format
        break;

    case "POST":
        // Handle adding a new record via the POST request (AJAX)
        if (isset($_POST['new_username']) && !isset($_POST['update']) && !isset($_POST['delete'])) {
            // Add new record (same as before)
            $new_username = $_POST['new_username'];
            $new_password = $_POST['new_password'];
            $new_role = $_POST['new_role'];
            $new_remarks = $_POST['new_remarks'];
            $created_date = date('Y-m-d H:i:s'); // Get current date and time in MySQL format

            // Check if username already exists
            $check_sql = "SELECT * FROM maestro WHERE username = :username";
            $check_stmt = $conn->prepare($check_sql);
            $check_stmt->bindParam(':username', $new_username);
            $check_stmt->execute();

            if ($check_stmt->rowCount() > 0) {
                $response = ['status' => 0, 'message' => 'Username already exists!'];
            } else {
                // Insert new record into 'maestro' table
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
            echo json_encode($response); // Send response back as JSON
        }

        // Handle updating an existing record
        if (isset($_POST['update'])) {
            $select_username = $_POST['select_username']; // Username to update
            $new_username = $_POST['new_username'];      // New username (optional)
            $new_password = $_POST['new_password'];
            $new_role = $_POST['new_role'];
            $new_remarks = $_POST['new_remarks'];

            // Validate that the entered username exists
            $check_sql = "SELECT * FROM maestro WHERE username = :username";
            $check_stmt = $conn->prepare($check_sql);
            $check_stmt->bindParam(':username', $select_username);
            $check_stmt->execute();
            
            if ($check_stmt->rowCount() > 0) {
                // Username exists, now proceed to update the record
                
                // Prepare the update SQL
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
                // Username does not exist, cannot update
                $response = ['status' => 0, 'message' => 'Username does not exist!'];
            }

            echo json_encode($response); // Send response back as JSON
        }

        // Handle deleting an existing record
        if (isset($_POST['delete'])) {
            $delete_username = $_POST['delete_username'];

            // Delete SQL statement
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

            echo json_encode($response); // Send response back as JSON
        }
        // if (isset($_POST['delete_all'])) {
        //     // Truncate the table (delete all records)
        //     $sql = "TRUNCATE TABLE maestro";
        //     if ($conn->query($sql) === TRUE) {
        //         $response = ['status' => 1, 'message' => 'All records have been deleted successfully.'];
        //     } else {
        //         $response = ['status' => 0, 'message' => 'Error deleting records: ' . $conn->$error];
        //     }
        //     echo json_encode($response); // Send response back as JSON
        // }

        if (isset($_POST['submit'])) {
            // Check if the file is uploaded without error
            if ($_FILES['csvFile']['error'] == 0) {
                $fileTmpName = $_FILES['csvFile']['tmp_name'];
                $fileName = $_FILES['csvFile']['name'];
        
                // Open the CSV file for reading
                $file = fopen($fileTmpName, 'r');
        
                // Skip row to kasi example ni sir header + ung blank
                fgetcsv($file);
                fgetcsv($file);

                // Process each row of the CSV
                while (($row = fgetcsv($file)) !== FALSE) {
                    // Skip na ung id kasi auto increment nasa db
                    $username = $row[2];     
                    $password = $row[3];     
                    $role = $row[4];         
                    $createdDate = $row[5];  
                    $remarks = $row[6];     
        
                    // Convert the date format to YYYY-MM-DD using DateTime
                    $dateObject = DateTime::createFromFormat('M d, Y', $createdDate);
                    if ($dateObject) {
                        $createdDate = $dateObject->format('Y-m-d');
                    }
        
                    // Insert into the database
                    $query = "INSERT INTO maestro (Username, Password, Role, CreatedDate, Remarks) 
                              VALUES ('$username', '$password', '$role', '$createdDate', '$remarks')";
        
                    $conn->query($query);
                }
        
                  // Close the database connection
            }
           
        }

        break;
}
?>
