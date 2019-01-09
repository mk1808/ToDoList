import { Component, OnInit } from '@angular/core';
import { FormControl } from 'node_modules111/@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  addInput: boolean = false;
  value: string;
  newTask = new FormControl('');
  tasks:Task[]=[];
  tasksString:string[]=['task1aa','taska2','taaask3'];


  constructor() { }

  ngOnInit() {

  }

  onAdd() {
    if (!this.addInput) {
      this.addInput = true;
    }
  }
  onEnter(value: string) {
    this.value = value;
    console.log(this.value);
    this.newTask.setValue(" ");
    this.tasksString.push(this.value);
  }
}
