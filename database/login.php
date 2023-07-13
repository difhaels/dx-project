<?php
header('Access-Control-Allow-Origin: *');

$conn = new mysqli("localhost", "id21032953_user", "DX_photo2", "id21032953_dxphoto");

if (mysqli_connect_error()) {
    echo mysqli_connect_error();
    exit();
} else {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM user WHERE username = '$username'";
    $result = mysqli_query($conn, $sql);

    if ($row = mysqli_fetch_assoc($result)) {
        // Verifikasi kata sandi
        if (password_verify($password, $row['password'])) {
            // Login berhasil
            echo "Success!";
        } else {
            // Login gagal
            echo "Invalid credentials!";
        }
    } else {
        // Login gagal
        echo "Invalid credentials!";
    }

    $conn->close();
}
