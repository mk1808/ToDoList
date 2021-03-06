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


if (isset($_GET['id']))
{
    $list->id=$_GET['id'];
        $ans = $list->getListDetails();
   if($ans){
        http_response_code(200);
        echo json_encode($ans);
    } else {
        http_response_code(400);
        echo json_encode(array("message" => "Brak danych"));
    }
}
else {
    http_response_code(400);
    echo json_encode(array("message" => "Puste dane"));
}





