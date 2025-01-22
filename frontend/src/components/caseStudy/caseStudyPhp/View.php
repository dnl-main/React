<?php
// Connect to the database

include 'connect.php';

// Query to fetch records from the maestro table
$selectQuery = "SELECT * FROM maestro";
$result = $conn->query($selectQuery);

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>View Table Records</title>
</head>
<body>

<h3>Table Records</h3>

<?php
if ($result->num_rows > 0) {
    echo "<table border='1'>
            <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Password</th>
                <th>Role</th>
                <th>Created Date</th>
                <th>Remarks</th>
            </tr>";

    // Fetch and display each row from the result
    while ($row = $result->fetch_assoc()) {
        echo "";
        echo "<tr>
                <td>" . $row['id'] . "</td>
                <td>" . $row['username'] . "</td>
                <td>" . $row['password'] . "</td>
                <td>" . $row['role'] . "</td>
                <td>" . $row['CreatedDate'] . "</td>
                <td>" . $row['remarks'] . "</td>
              </tr>";
    }

    echo "</table>";
} else {
    echo "No records found.";
}
session_start();
$conn->close();
?>

<form method="get" action="dashboard.php">
    <button>Return to Dashboard</button>
</form>

</body>
</html>
