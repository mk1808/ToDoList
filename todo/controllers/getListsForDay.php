<?php


header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../config/database.php';
include_once '../models/list.php';

$database = new Database();
$db = $database->getConnection();
 $list= new MyList($db);
$list->dueDate=$_GET['dueDate'];


    
        $ans = $list->getListsForDay();
   if($ans){
        http_response_code(200);
        echo json_encode($ans);
    } else {
        http_response_code(200);
        echo json_encode(array());
    }





