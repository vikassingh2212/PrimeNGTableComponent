import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private httpClient: HttpClient;

  constructor(private http: HttpClient) {
    this.httpClient = http;
  }

  getData(path: string): any {
    return this.httpClient.get(path);
  }

  getDataFiltered(path: string, filter: any): any {
    
    let params = new HttpParams().set('queryString', JSON.stringify(filter));
    return this.httpClient.get(path, {
      params: params
    });
  }
}
