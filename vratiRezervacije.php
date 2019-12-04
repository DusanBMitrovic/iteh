<?php
include "dbconfig.php";
 

$table = 'rezervacija';
$primaryKey = 'id';

$columns = array(

    array( 'db' => 'id', 'dt' => 0 ),
    array( 'db' => 'datum',  'dt' => 2 ),
    array( 'db' => 'broj_ljudi',   'dt' => 3),
    array( 'db' => 'ime',     'dt' => 1 ),
    array( 'db' => 'napomena',     'dt' => 4)

);
 
// SQL server connection information
$sql_details = array(
    'user' => $mysql_user,
    'pass' => $mysql_password,
    'db'   => $mysql_db,
    'host' => $mysql_server
);

require( './ssp.class.php' );
 
echo json_encode(
    SSP::simple( $_GET, $sql_details, $table, $primaryKey, $columns )
);



?>