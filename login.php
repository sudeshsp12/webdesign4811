<?php

$username = $_POST["name"];
$password = $_POST["pwd"];

$con = mysqli_connect("localhost", "root", "root", "galle");
if (!$con) {
    echo "connection error";
    die($con);
}

$res = mysqli_query($con, "select * from user where name='$username' and password='$password'");
if (!$res) {
    echo "query error: " . mysqli_error($con); // Output the error message
    die();
}

$b = false;
while ($row = mysqli_fetch_array($res)) {
    $b = true;
}

if ($b) {
    header("location:dashbord.html");
} else {
    echo "<script>";
    echo "alert('invalid username or password');";
    echo "window.location='login.html';";
    echo "</script>";
}

?>