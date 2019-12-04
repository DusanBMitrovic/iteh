<?php
  

    include "./dbconfig.php";

    if($_POST["ime"] == null){
        echo json_encode(array('success' => 100));
    }else if($_POST["datum"] == null){
        echo json_encode(array('success' => 200));
    }else if($_POST["broj_osoba"] == null){
        echo json_encode(array('success' => 300));
    }else {
    $ime = $_POST["ime"];
    $datum = $_POST["datum"];
    $broj_osoba = $_POST["broj_osoba"];
    $napomena = $_POST["napomena"];
    
    $upit = "INSERT INTO rezervacija(ime,broj_ljudi,datum,napomena) VALUES ('".$ime."',$broj_osoba,'$datum','$napomena') ";

    if ($mysqli->query($upit)){
        // echo "IDEMO MALENA";
        // header("Location: ./index.php");
        echo json_encode(array('success' => 1));
      } else {
        echo json_encode(array('success' => 0));
        echo "<p>Nastala je greška pri ubacivanju novosti</p>" . $mysqli->error;
      }
    }

?>