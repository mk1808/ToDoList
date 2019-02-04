import { Component, OnInit, Input } from '@angular/core';
import { ToDoService } from 'src/app/shared/to-do.service';
import { DefaultGridAutoDirective } from '@angular/flex-layout/grid/typings/auto/auto';
import { List } from 'src/app/shared/classes';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {
dayDate:string;
lists:List[]=[];
  constructor(private todo:ToDoService, private router: Router, private route: ActivatedRoute) { }
  @Input() set date(day:string){
    this.dayDate=day;
    this.todo.getListsForDay(day).subscribe(x=>
      {
        this.lists=x;
        console.log(x);
      },
      e=>{
        console.log(e);
      })
  }
  ngOnInit() {
    
  }

  onClickDay(id){
    this.router.navigate(['../list/'+ id]);

  }

}
