import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { EmployeeEntity } from './materi2.model';
import { InMemoryDbService } from 'angular-in-memory-web-api';



@Injectable({ providedIn: 'root' })
export class EmployeeService {
  private employeeApi = 'api/employees';  // create virtual URL to for  API
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // inject constructor ~
  constructor(private http: HttpClient) { }

  /** GET Employee List */
  getEmployees(): Observable<EmployeeEntity[]> {
    return this.http.get<EmployeeEntity[]>(this.employeeApi)
      .pipe(
        catchError(this.handleError<EmployeeEntity[]>('onGet Employee List', []))
      );
  }

  /** GET Employee by (ID) */
  getEmployee(id: number): Observable<EmployeeEntity> {
    const url = `${this.employeeApi}/${id}`;
    return this.http.get<EmployeeEntity>(url);
  }

  /** INSERT Employee */
  addEmployee(employee: EmployeeEntity): Observable<EmployeeEntity> {
    return this.http.post<EmployeeEntity>(this.employeeApi, employee, this.httpOptions);
  }


  /** UPDATE Employee */
  updateEmployee(employee: EmployeeEntity): Observable<any> {
    return this.http.put(this.employeeApi, employee, this.httpOptions).pipe(
      tap(_ => console.log(`updated employee id=${employee.id}`)),
      catchError(this.handleError<any>('update Employee'))
    );
  }

  /** DELETE Employee */
  deleteEmployee(employee: EmployeeEntity | number): Observable<EmployeeEntity> {
    const id = typeof employee === 'number' ? employee : employee.id;
    const url = `${this.employeeApi}/${id}`;

    return this.http.delete<EmployeeEntity>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted data id=${id}`)),
      catchError(this.handleError<EmployeeEntity>('on delete'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
}