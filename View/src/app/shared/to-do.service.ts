import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task, List } from './classes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  constructor(private http: HttpClient) { }

  public createTask(task:Task): Observable<any> {
    return this.http.post<any>('http://localhost/todo/controllers/createTask.php',
    JSON.stringify(task));
}
public createList(list:List): Observable<any> {
  return this.http.post<any>('http://localhost/todo/controllers/createList.php',
  JSON.stringify(list));
}

public deleteTask(task): Observable<any> {
  return this.http.post<any>('http://localhost/todo/controllers/deleteTask.php',
  JSON.stringify(task));
}

public deleteList(list): Observable<any> {
  return this.http.post<any>('http://localhost/todo/controllers/deleteList.php',
  JSON.stringify(list));
}

public getLists(): Observable<List[]> {
  
  return this.http.get<List[]>('http://localhost/todo/controllers/getLists.php');
}


public getTasksForList(id): Observable<any> {
  return this.http.get<any>('http://localhost/todo/controllers/getTasksForList.php?id='+id);

}

public getListDetails(id): Observable<List> {
  return this.http.get<any>('http://localhost/todo/controllers/getListDetails.php?id='+id);

}

public updateTask(task:Task): Observable<Task> {
  return this.http.post<any>('http://localhost/todo/controllers/updateTask.php',
  JSON.stringify(task));
}

public updateList(list:List): Observable<List> {
  return this.http.post<any>('http://localhost/todo/controllers/updateList.php',
  JSON.stringify(list));
}

}
