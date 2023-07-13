<?php

    header('Access-Control-Allow-Origin:*');
    header('Content-Type:application/json');

    $resp = [];

    for ($i=0; $i < 20; $i++) { 
        array_push($resp,rand(0,500));
    }

    echo json_encode($resp);
?>