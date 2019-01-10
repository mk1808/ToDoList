import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from 'node_modules/@angular/forms';
import { Task } from '../shared/classes';
import { FormBuilder } from 'node_modules/@angular/forms';

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
  tasks:Task[]=[];
  tasksString:string[]=['task1aa','taska2','taaask3 jilij wijsk seik ekkdekdkkdn kdkkddddddd dddddkdkd'];


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.newTaskForm = this.fb.group({
      newTask: []

  });

  }
  onAdd() {
    if (!this.addInput) {
      this.addInput = true;
    }
  }
  onEnter(value: string) {
    this.value = value;
    console.log(this.value);
    this.newTaskForm.controls.newTask.setValue(" ");
    this.tasksString.push(this.value);
  }
  onChange(){
    console.log("a");
  }
}
