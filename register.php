<?php


$username=$_POST["name"];
$password=$_POST["pwd"];
$age=$_POST["age"];
$gender=$_POST["gender"];
$contact=$_POST["tp"];

$con=mysqli_connect("localhost","root","root","galle");
if($con){
	echo "succesfully connected";
}else{
	echo "connection failed";
}


$res=mysqli_query($con,"insert into user values('$username','$password','$age','$gender','$contact')");

if($res){
	echo"<br>";
	echo"succesfully saved";
}else{
	echo"<br>";
	echo "save failed";
}


?>