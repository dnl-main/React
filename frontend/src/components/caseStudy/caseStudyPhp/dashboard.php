<?php
session_start();
if (isset($_POST['exit'])) {
    session_destroy();
    header("Location: index.php");
    exit();
}

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "hosttest";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (!isset($_SESSION['username'])) {
    die("You must log in first!");
}

$error_message = $success_message = $delete_message = "";

// Add Record functionality
if (isset($_POST['add'])) {
    $new_username = $_POST['new_username'];
    $new_password = $_POST['new_password'];
    $new_role = $_POST['new_role'];
    $new_remarks = $_POST['new_remarks'];
    $created_date = date('Y-m-d H:i:s'); // Get current date and time in MySQL format

    $check_sql = "SELECT * FROM maestro WHERE username = ?";
    $check_stmt = $conn->prepare($check_sql);
    $check_stmt->bind_param("s", $new_username);
    $check_stmt->execute();
    $check_result = $check_stmt->get_result();

    if ($check_result->num_rows > 0) {
        $error_message = "Username already exists!";
    } else {
        // Add data
        $insert_sql = "INSERT INTO maestro (username, password, role, remarks, CreatedDate) VALUES (?, ?, ?, ?, ?)";
        $insert_stmt = $conn->prepare($insert_sql);
        $insert_stmt->bind_param("sssss", $new_username, $new_password, $new_role, $new_remarks, $created_date);
        if ($insert_stmt->execute()) {
            $success_message = "New record added successfully!";
        } else {
            $error_message = "Error adding record: " . $conn->error;
        }
    }
}



// Update Record functionality
if (isset($_POST['update'])) {
    $select_username = $_POST['select_username']; // Username to update
    $new_username = $_POST['new_username'];      // New username (optional)
    $new_password = $_POST['new_password'];
    $new_role = $_POST['new_role'];
    $new_remarks = $_POST['new_remarks'];

    // Validate that the entered username exists
    $check_sql = "SELECT * FROM maestro WHERE username = ?";
    $check_stmt = $conn->prepare($check_sql);
    $check_stmt->bind_param("s", $select_username);
    $check_stmt->execute();
    $check_result = $check_stmt->get_result();

    if ($check_result->num_rows > 0) {
        // Update the record, including optional username change
        if (!empty($new_username)) {
            $update_sql = "UPDATE maestro SET username = ?, password = ?, role = ?, remarks = ? WHERE username = ?";
            $update_stmt = $conn->prepare($update_sql);
            $update_stmt->bind_param("sssss", $new_username, $new_password, $new_role, $new_remarks, $select_username);
        } else {
            $update_sql = "UPDATE maestro SET password = ?, role = ?, remarks = ? WHERE username = ?";
            $update_stmt = $conn->prepare($update_sql);
            $update_stmt->bind_param("ssss", $new_password, $new_role, $new_remarks, $select_username);
        }

        if ($update_stmt->execute()) {
            echo "Record updated successfully!</p>";
        } else {
            echo "Error updating record:  $conn->error ";
        }
    } else {
        echo "Username does not exist!";
    }
}


// Delete All Records
if (isset($_POST['delete_all'])) {
    $sql = "TRUNCATE TABLE maestro";
    if ($conn->query($sql) === TRUE) {
        $success_message = "All records have been deleted successfully.";
    } else {
        $error_message = "Error deleting records: " . $conn->error;
    }
}

// Delete Single Record
if (isset($_POST['delete'])) {
    $username_to_delete = $_POST['delete_username'];

    $delete_sql = "DELETE FROM maestro WHERE username = ?";
    $delete_stmt = $conn->prepare($delete_sql);
    $delete_stmt->bind_param("s", $username_to_delete);
    if ($delete_stmt->execute()) {
        if ($delete_stmt->affected_rows > 0) {
            $delete_message = "Record deleted successfully!";
        } else {
            $delete_message = "Username not found.";
        }
    } else {
        $delete_message = "Error deleting record: " . $conn->error;
    }
    echo $delete_message;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Case Study Group 3</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
<?php if (isset($error_message)) echo "<p class='error'>$error_message</p>"; ?>
<?php if (isset($success_message)) echo "<p class='success'>$success_message</p>"; ?>
<h3>Add New Record</h3>
<form method="post">
    <label for="new_username">Username:</label>
    <input type="text" id="new_username" name="new_username" required><br><br>

    <label for="new_password">Password:</label>
    <input type="password" id="new_password" name="new_password" required><br><br>

    <label for="new_role">Role:</label>
    <input type="text" id="new_role" name="new_role" required><br><br>

    <label for="new_remarks">Remarks:</label>
    <textarea id="new_remarks" name="new_remarks" rows="4" cols="50"></textarea><br><br>

    <button type="submit" name="add">Add New Record</button>
</form>

<h3>Update Record</h3>
<form method="post">
    <label for="select_username">Enter Username to Update:</label>
    <input type="text" id="select_username" name="select_username" required><br><br>

    <label for="new_username">New Username (if changing):</label>
    <input type="text" id="new_username" name="new_username"><br><br>

    <label for="new_password">New Password:</label>
    <input type="password" id="new_password" name="new_password" required><br><br>

    <label for="new_role">New Role:</label>
    <input type="text" id="new_role" name="new_role" required><br><br>

    <label for="new_remarks">New Remarks:</label>
    <textarea id="new_remarks" name="new_remarks" rows="4" cols="50"></textarea><br><br>

    <button type="submit" name="update">Update Record</button>
</form>


    <h3>Delete Record</h3>
    <form method="post">
        <label for="delete_username">Username:</label>
        <input type="text" id="delete_username" name="delete_username" required><br><br>
        <button type="submit" name="delete">Delete Record</button>
    </form>

    <h3>Delete All Records</h3>
    <form method="post">
        <button type="submit" name="delete_all" onclick="return confirm('Are you sure you want to delete all records? This action cannot be undone.')">
            Delete All Records
        </button>
    </form>

    <h3>Upload CSV</h3>
    <form action="import.php" method="post" enctype="multipart/form-data">
        <label for="csvFile">Choose CSV File:</label>
        <input type="file" name="csvFile" id="csvFile" required>
        <button type="submit" name="submit">Import CSV</button>
    </form>

    <h3>View Table</h3>
    <form action="View.php" method="post">
        <button name="viewRecords">View Records</button>
    </form>

    <h3>Exit</h3>
    <form method="post">
        <button name="exit">Exit</button>
    </form>

   
</body>
</html>

<?php
$conn->close();
?>
