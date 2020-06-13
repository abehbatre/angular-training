import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs/';
import { map, } from 'rxjs/operators';

const BASE_URL = 'http://my-json-server.typicode.com/abehbatre/fake-api/';

@Injectable({ providedIn: 'root' })
export class ApiService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getProfile(): Observable<any> {
    return this.http.get(BASE_URL + 'profile').pipe(
      map(this.extractData));
  }


  getEmployee(): Observable<any> {
    return this.http.get(BASE_URL + 'employee').pipe(
      map(this.extractData));
  }

  // getProduct(id): Observable<any> {
  //   return this.http.get(endpoint + 'products/' + id).pipe(
  //     map(this.extractData));
  // }

  // addProduct(product): Observable<any> {
  //   console.log(product);
  //   return this.http.post<any>(endpoint + 'products', JSON.stringify(product), httpOptions).pipe(
  //     tap((product) => console.log(`added product w/ id=${product.id}`)),
  //     catchError(this.handleError<any>('addProduct'))
  //   );
  // }

  // updateProduct(id, product): Observable<any> {
  //   return this.http.put(endpoint + 'products/' + id, JSON.stringify(product), httpOptions).pipe(
  //     tap(_ => console.log(`updated product id=${id}`)),
  //     catchError(this.handleError<any>('updateProduct'))
  //   );
  // }

  // deleteProduct(id): Observable<any> {
  //   return this.http.delete<any>(endpoint + 'products/' + id, httpOptions).pipe(
  //     tap(_ => console.log(`deleted product id=${id}`)),
  //     catchError(this.handleError<any>('deleteProduct'))
  //   );
  // }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
