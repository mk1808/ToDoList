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
  allListTable:any[]=[];
  newListForm:FormGroup;
  editListForm:FormGroup;
  newList:List=new List;
  editList:boolean=false;
  myRow: any[] = [];
  constructor( private todo:ToDoService,private fb: FormBuilder,
    private router: Router, private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.allListTable=[];
    this.newListForm = this.fb.group({
      name: [''],
      description: [''],
      dueDate: ['']
    });

    this.editListForm = this.fb.group({
      name: [''],
      description: [''],
      dueDate: ['']
    });

    this.todo.getLists().subscribe(x=>
    {
      
    
      this.allListTable=x;
        this.to2DTable(this.allListTable);
    },
    e=>{
      console.log("aa");
      
      //this.allListTable.push();

      //this.myRow.push("");
      //this.allListTable.push(this.myRow);

      this.to2DTable([]);
    })

  

  }

  to2DTable(table: any[]) {
    this.TTable=[];
    
    let i: number = 1;
    let j: number = 0;
    let add: boolean = true;
    let ii: number;
    this.myRow=[];
    this.myRow.push("");
    table.forEach(element => {
    //  console.log(myRow);
     
      if (i < 3) {

        i++;
        this.myRow.push(element);
      }
      else {
        i = 0;
        this.TTable.push(this.myRow);

        this.myRow = [];
        i++;
        this.myRow.push(element);
      }



    });
    this.TTable.push(this.myRow);
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
  if (!this.editList){
  list.editList=true;
  this.editList=true;}
  else {
    console.log("juz edytujesz!")
  }
}

onDelete(list:List){
this.todo.deleteList(list).subscribe(x=>
  {
    console.log(x);
   this.ngOnInit();
  })
  
} 

onEditList(list:any){
  list.editList=false;
  console.log(list);
  this.editList=false;

  this.todo.updateList(list).subscribe(x=>
    {
      console.log(x);
    })
  
}
}
