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
        tap(_ => console.log('fetched heroes')),
        catchError(this.handleError<Browse[]>('getHeroes', []))
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
