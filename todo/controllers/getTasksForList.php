<?php


header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../config/database.php';
include_once '../models/task.php';

$database = new Database();
$db = $database->getConnection();
 $task= new Task($db);


if (isset($_GET['id']))
{
    $task->idList=$_GET['id'];
        $ans = $task->getTasksForList();
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





