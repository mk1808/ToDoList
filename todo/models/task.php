<?php
class Task{
    private $conn;
    private $tableName = "task";
    
    public $id;
    public $name;
    public $idList;
    public $status;
    
    public function __construct($db){
        $this->conn = $db;
    }
    
    public function create(){
        $this->id=strval(htmlspecialchars(strip_tags($this->id)));
        $this->name=strval(htmlspecialchars(strip_tags($this->name)));
        $this->idList=strval(htmlspecialchars(strip_tags($this->idList)));
       // $this->status=strval(htmlspecialchars(strip_tags($this->status)));

        if ($this->status){
            $this->status='true';
        }
        else{
            $this->status='false';
        }


        $query = 'INSERT INTO task SET name = "'.$this->name.'",  idList = '.$this->idList.',
         status='.$this->status.';';
$stmt = $this->conn->prepare($query);


if ($stmt->execute()) {
    return $this->conn->lastInsertId();

}
else{
    return -1;
}
}

public function delete(){
    $this->id=strval(htmlspecialchars(strip_tags($this->id)));

$query = 'DELETE FROM  task WHERE id =' .$this->id.';';
$stmt = $this->conn->prepare($query);


if ($stmt->execute()) {
    return true;

}
else{
    return false;
}   
}

public function getTasksForList(){
    $this->idList=strval(htmlspecialchars(strip_tags($this->idList)));

    $query = 'SELECT * FROM task WHERE idList =' .$this->idList.';';
    $stmt = $this->conn->prepare($query);


    if ($stmt->execute()) {
    $ans=array();
    while($row=$stmt->fetch(PDO::FETCH_ASSOC)){
        $task=(object)$row;
        array_push($ans,$task);
        
    }    
    
        
        return $ans;
    
    }
    else{
        return false;
    }
}
    
public function update(){
    $this->id=strval(htmlspecialchars(strip_tags($this->id)));
    $this->name=strval(htmlspecialchars(strip_tags($this->name)));
    $this->idList=strval(htmlspecialchars(strip_tags($this->idList)));


    if ($this->status){
        $this->status='true';
    }
    else{
        $this->status='false';
    }

    $query = 'UPDATE task SET name = "'.$this->name.'",  idList = '.$this->idList.',
    status='.$this->status.' WHERE ID = '.$this->id.';';


    $stmt = $this->conn->prepare($query);


    if($stmt->execute()){

        return 1;
    }

    return -1;
}
}
