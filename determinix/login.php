<!-- 
	Database menggunakan xampp
	1. taro folder determinix di htdocs
	2. run apache dan database pada xampp cpanel
-->

<?php
header('Access-Control-Allow-Origin: *');

$conn = new mysqli("localhost", "root", "", "determinix");

if (mysqli_connect_error()) {
    echo mysqli_connect_error();
    exit();
} else {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM user WHERE username = '$username'";
    $result = mysqli_query($conn, $sql);

    $row = mysqli_fetch_assoc($result);
    if (password_verify($password, $row["password"])) {
        // Login berhasil
        echo "Success!";
    } else {
        // Login gagal
        echo "Invalid credentials!";
    }

    $conn->close();
}
