<?php
include "dbconfig.php";

if(isset($_POST['function2call']) && !empty($_POST['function2call'])) {
    $function2call = $_POST['function2call'];
    switch($function2call) {
        case 'getUname' : getUname();break;
        case 'logout' : logout(); break;
        case 'allowReservations': allowReservations(); break;
    }
}


function getUname() {
    if(!isset($_SESSION['uname'])){
        echo 0;
    }else {
        echo $_SESSION['uname'];
    }
}


function logout() {
    session_destroy();
}

?>