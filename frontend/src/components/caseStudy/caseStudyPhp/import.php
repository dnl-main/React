<?php
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

        // Connect to the database
        include 'connect.php'; // Include the database connection

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

        fclose($file);  // Close the CSV file
        $conn->close();  // Close the database connection
    }
    // After the import, show the button
    session_start();
    echo 'hello';
}
?>
