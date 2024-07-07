import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor(private http: HttpClient) { }

  getList(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json; charset=utf-8'
        }
      )
    }
    return this.http.get<any>("http://localhost:5265/TodoItems", httpOptions);
  }

  addToList(item: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json; charset=utf-8'
        }
      )
    }
    return this.http.post<any>("http://localhost:5265/TodoItems/", item, httpOptions);
  }

  deleteItem(id: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json; charset=utf-8'
        }
      )
    }
    return this.http.delete<any>("http://localhost:5265/TodoItems/" + id);
  }
}
