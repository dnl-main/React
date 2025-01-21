<?php
session_start();
include 'connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if 'username' and 'password' are set in POST
    if (isset($_POST['username']) && isset($_POST['password'])) {
        $user = $_POST['username'];
        $pass = $_POST['password'];

        $sql = "SELECT * FROM maestro WHERE username = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $user);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();

            if ($row['password'] === $pass) {
                $_SESSION['username'] = $user;
                header("Location: dashboard.php");
                exit();
            } else {
                $error = "Password is not correct.";
            }
        } else {
            $error = "Username does not exist.";
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
    <link rel="stylesheet" href="ass1v2.css">
</head>
<body>
    <div class="login">
        <div class="header">
            <h2>LOGIN PAGE</h2>
        </div>
        <form action="index.php" method="post">
        <label for="username">Username:</label><br>
            <input type="text" id="username" name="username" value="" required><br><br>

            <label for="password">Password:</label><br>
            <input type="password" id="password" name="password" value="" required><br><br>

            <?php if (!empty($error)): ?>
                <p class="error-message"><?= $error ?></p>
            <?php endif; ?>

            <input type="submit" value="Login">
        </form>
    </div>
</body>
</html>
