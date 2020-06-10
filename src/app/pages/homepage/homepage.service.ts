import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  constructor(private http: HttpClient) { }

  /**
   * getIpAddress
   */
  public getIpAddress() {
    return this.http.get("http://api.ipify.org/?format=json");
  }

}
