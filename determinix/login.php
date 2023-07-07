<?php
header('Access-Control-Allow-Origin: *');

$conn = new mysqli("localhost", "id20899462_user", "DX_photo1", "id20899462_user");

if (mysqli_connect_error()) {
    echo mysqli_connect_error();
    exit();
} else {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM user WHERE username = '$username' AND password = '$password'";
    $result = mysqli_query($conn, $sql);

    // password_verify($password, $row["password"])
    if ($row = mysqli_fetch_assoc($result)) {
        // Login berhasil
        echo "Success!";
    } else {
        // Login gagal
        echo "Invalid credentials!";
    }

    $conn->close();
}
