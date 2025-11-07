import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { config } from '/config.ts';  // Import the config file

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = config.apiUrl;  // Use the apiUrl from the config file

  constructor(private http: HttpClient) { }

  // A method to fetch data from the backend API
  getData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/`);  // Make a GET request to the backend
  }
}
