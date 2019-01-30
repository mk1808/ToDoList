import { Component, OnInit } from '@angular/core';
import { List } from '../shared/classes';
import { ToDoService } from '../shared/to-do.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-many-lists-view',
  templateUrl: './many-lists-view.component.html',
  styleUrls: ['./many-lists-view.component.scss']
})
export class ManyListsViewComponent implements OnInit {
  lists: List[] = [];
  //myRow:string[]=[]
  listString: string[][] = [['11', '12', '13'], ['21', '22', '23'], ['31', '32', '33']];
  listTable: string[] = ['11', '12', '13', '21', '22', '23', '31', '32', '33', '41'];
  TTable: any[][] = [];
  allListTable:List[];
  newListForm:FormGroup;
  newList:List=new List;
  editList:boolean=false;
  constructor( private todo:ToDoService,private fb: FormBuilder,
    private router: Router, private route: ActivatedRoute) { }
  
  ngOnInit() {

    this.newListForm = this.fb.group({
      name: [''],
      description: [''],
      dueDate: ['']
    });

    this.todo.getLists().subscribe(x=>
    {
      
      console.log(x);
      this.allListTable=x;
        this.to2DTable(this.allListTable);
    })

  

  }

  to2DTable(table: List[]) {
    
    let myRow: any[] = [];
    let i: number = 1;
    let j: number = 0;
    let add: boolean = true;
    let ii: number;
    myRow.push("");
    table.forEach(element => {
      console.log(myRow);
     
      if (i < 3) {

        i++;
        myRow.push(element);
      }
      else {
        i = 0;
        this.TTable.push(myRow);

        myRow = [];
        i++;
        myRow.push(element);
      }



    });
    this.TTable.push(myRow);
    console.log(this.TTable);
  }

onAddList(){
  if(this.newListForm.controls.name.value==""){
    this.newListForm.controls.name.setErrors({
      notUnique: true
    });
  }
  else{
  this.newList.name=this.newListForm.controls.name.value;
  this.newList.dueDate=this.newListForm.controls.dueDate.value;
  this.newList.description=this.newListForm.controls.description.value;
  
  this.todo.createList(this.newList).subscribe(x=>
    {
      console.log(x);
    
    this.newListForm.controls.description.setValue("");
    this.newListForm.controls.name.setValue("");
    this.newListForm.controls.dueDate.setValue("");
 
    console.log("form",this.newListForm);
    this.TTable=[];
    this.newListForm.controls.name.clearValidators();
    
    this.newListForm.controls.name.updateValueAndValidity();
    this.newListForm.controls.name.setErrors(null);
   
    
    this.ngOnInit();
   
    
  })
}
}

onClickList(id:number){
  console.log(id);

  this.router.navigate(['../list/'+ id]);


}

onEdit(list:any){
  list.editList=true;
}

onDelete(id:any){
this.todo.deleteList(id).subscribe(x=>
  {
    console.log(x);
    this.ngOnInit();
  })
}

onEditList(list:List){

  console.log(list);
}
}
