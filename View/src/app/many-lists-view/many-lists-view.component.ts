import { Component, OnInit } from '@angular/core';
import { List } from '../shared/classes';

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
  constructor() { }

  ngOnInit() {
    this.to2DTable(this.listTable);

  }

  to2DTable(table: any[]) {
    
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

}
