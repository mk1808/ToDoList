<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../config/database.php';
include_once '../models/list.php';


$database = new Database();
$db = $database->getConnection();

$list = new MyList($db);

$data = json_decode(file_get_contents("php://input"));


$list->id = $data->id;
$list->name = $data->name;
$list->dueDate = $data->dueDate;
$list->description = $data->description;

$stmt = $list->update();

if($stmt>0){
    http_response_code(200);
    echo json_encode(array("message"=>"List was updated" ));
}
else{
    http_response_code(400);
    echo json_encode(array("message" => "Unable to update List."));
}