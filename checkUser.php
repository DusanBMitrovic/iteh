<?php
include "dbconfig.php";

$uname = $_POST['username'];
$password = $_POST['password'];


if ($uname != "" && $password != ""){

    $sql_query = "select count(*) as cntUser from user where username='".$uname."' and password='".$password."'";

    $result = mysqli_query($mysqli,$sql_query);
    $row = mysqli_fetch_array($result);

    $count = $row['cntUser'];

    if($count > 0){
        $_SESSION['uname'] = $uname;
        echo json_encode(array('success' => 1));
    }else{
        echo json_encode(array('error' => 0));
    }

}
