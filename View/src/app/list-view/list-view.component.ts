import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDoService } from '../shared/to-do.service';
import { FormBuilder } from '@angular/forms';
import { Task, List } from '../shared/classes';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {


  constructor(private todo:ToDoService,private fb: FormBuilder,
    private router: Router, private route: ActivatedRoute) {
    
  }

  ngOnInit() {
   
  }

}
