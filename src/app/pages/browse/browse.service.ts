import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Browse } from './browse.model';


@Injectable({ providedIn: 'root' })
export class BrowseService {

  private browseApi = 'api/browses';  // URL to web api (private)

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // inject constructor ~
  constructor(private http: HttpClient) { }


  /** GET Browses List */
  getBrowses(): Observable<Browse[]> {
    return this.http.get<Browse[]>(this.browseApi)
      .pipe(
        tap(_ => console.log('fetched Browse')),
        catchError(this.handleError<Browse[]>('getBrowse', []))
      );
  }

  /** GET Browse by (ID) */
  getBrowse(id: number): Observable<Browse> {
    const url = `${this.browseApi}/${id}`;
    return this.http.get<Browse>(url).pipe(
      tap(_ => console.log(`fetched Browse id=${id}`))
    );
  }

  /** INSERT Browse */
  addBrowse(browse: Browse): Observable<Browse> {
    return this.http.post<Browse>(this.browseApi, browse, this.httpOptions);
  }


  /** UPDATE Browse */
  updateBrowse(browse: Browse): Observable<any> {
    return this.http.put(this.browseApi, browse, this.httpOptions).pipe(
      tap(_ => console.log(`updated browse id=${browse.id}`)),
      catchError(this.handleError<any>('updateBrowse'))
    );
  }

  /** DELETE Browse */
  deleteBrowse(browse: Browse | number): Observable<Browse> {
    const id = typeof browse === 'number' ? browse : browse.id;
    const url = `${this.browseApi}/${id}`;

    return this.http.delete<Browse>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted data id=${id}`)),
      catchError(this.handleError<Browse>('on delete'))
    );
  }




  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
