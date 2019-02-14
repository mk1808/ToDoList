import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from 'node_modules/@angular/forms';
import { Task, List } from '../shared/classes';
import { FormBuilder } from 'node_modules/@angular/forms';
import { ToDoService } from '../shared/to-do.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  addInput: boolean = false;
  value: string;
  // newTask = new FormControl('');
  newTaskForm: FormGroup;
  tasks: Task[] = [];
  list: List = new List;
  newTask: Task = new Task;
  updatedTask: Task = new Task;
  status: boolean;

  id: any;

  constructor(private todo: ToDoService, private fb: FormBuilder,
    private router: Router, private route: ActivatedRoute) {
  
  }

  ngOnInit() {
    this.newTaskForm = this.fb.group({
      newTask: []

    });

    /*this.route.queryParams.subscribe(params => {
      this.id= params['id'];
      console.log(this.id); 
  });*/
   this.id = this.route.snapshot.paramMap.get('id');
   console.log("aaa", this.id);
   
    this.todo.getListDetails(this.id).subscribe(x => {
      console.log(x);
      this.list = x;
    });
    this.todo.getTasksForList(this.id).subscribe(x => {

      this.tasks = x;
      console.log(this.tasks);

      let i: number = 0;
      this.tasks.forEach(element => {


        i++;

        this.newTaskForm.addControl(('element' + i.toString()), new FormControl(false));


      });
    },e=>{
      
      this.tasks = []
    });





  }
  onAdd() {
    if (!this.addInput) {
      this.addInput = true;
    }
  }
  onEnter(value: string) {

    console.log(value);
    this.newTask.name = value;
    this.newTask.idList = this.id;
    this.newTask.status = false;
    this.newTaskForm.controls.newTask.setValue(" ");

    this.todo.createTask(this.newTask).subscribe(x => {
      console.log(x);
      this.ngOnInit();
    })

  }

  onChange(event, task: Task, id) {
    console.log(event.checked, task);

    if (this.tasks[id].status == true) {
      this.tasks[id].status = false;
    }
    else { this.tasks[id].status = true; }

    this.updatedTask.id = task.id;
    this.updatedTask.name = task.name;
    this.updatedTask.status = event.checked;
    this.updatedTask.idList = task.idList;

    this.todo.updateTask(this.updatedTask).subscribe(x => {

      console.log(x);
    })

  }

  onDelete(task: Task) {
    console.log(task.id);
    this.todo.deleteTask(task).subscribe(x=>
      {
        console.log(x);
        this.ngOnInit();
      },e=>{
        //this.ngOnInit();

      })


  }
}
