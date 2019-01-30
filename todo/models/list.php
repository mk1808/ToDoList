<?php
class MyList{
    private $conn;
    private $tableName = "list";
    
    public $id;
    public $name;
    public $dueDate;
    public $description;
    
    public function __construct($db){
        $this->conn = $db;
    }
    
    
    public function create(){
        $this->id=strval(htmlspecialchars(strip_tags($this->id)));
        $this->name=strval(htmlspecialchars(strip_tags($this->name)));
        $this->dueDate=strval(htmlspecialchars(strip_tags($this->dueDate)));
        $this->description=strval(htmlspecialchars(strip_tags($this->description)));


        $query = 'INSERT INTO list SET name = "'.$this->name.'",  dueDate = "'.$this->dueDate.'",
         description="'.$this->description.'";';
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

$query = 'DELETE FROM  list WHERE id =' .$this->id.';';
$stmt = $this->conn->prepare($query);


if ($stmt->execute()) {
    return true;

}
else{
    return false;
}   
}

public function getLists(){


    $query = 'SELECT * FROM list'.';';
    $stmt = $this->conn->prepare($query);


    if ($stmt->execute()) {
    $ans=array();
    while($row=$stmt->fetch(PDO::FETCH_ASSOC)){
        $list=(object)$row;
        array_push($ans,$list);
        
    }    
    
        
        return $ans;
    
    }
    else{
        return false;
    }
}
public function getListDetails(){
    $this->id=strval(htmlspecialchars(strip_tags($this->id)));

    $query = 'SELECT * FROM list WHERE id =' .$this->id.';';
    $stmt = $this->conn->prepare($query);
    $list;

    if ($stmt->execute()) {
    
    if($row=$stmt->fetch(PDO::FETCH_ASSOC)){
        $list=(object)$row;
        
        
    }    
    
        
        return $list;
    
    }
    else{
        return false;
    }
}
    }
