import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getConnection() {
    // return this.http.get()
  }

  captureData() {
    // return this.http.get()
  }
  printData() {
    // return this.http.get()
  }

  uploadDatos() {
    // return this.http.post()
  }
}
