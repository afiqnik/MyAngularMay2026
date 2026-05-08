import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class Api {
  private baseURL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  httpGet(path: string) {
    let headers = { headers: new HttpHeaders };
    let fullURL: string = this.baseURL + path;
    return new Promise((resolve, reject) => {
      this.http.get(fullURL, headers).subscribe({
        next: (response: any) => {
          resolve(response);
        },
        error: (error: any) => {
          reject(error);
        }
      })
    })
  }

  httpPost(path: string, payload: any, method?: string) {
    let fullURL: string = this.baseURL + path;
    let headers = { headers: new HttpHeaders };
    let token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJhYWFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NzgxNDEwODcsImV4cCI6MTc3ODE0NDY4N30.zykIbDDeoLnrtRdn_ReZpWhRzKv8OzJCenY9-Tq17wc'; //temporary token
    payload = { ...payload, user_id: 1 };

    if (token) {
      headers = { headers: new HttpHeaders({ Authorization: `Bearer ${token}` }).set('Content-Type', 'application/json') };
    }
    return new Promise((resolve, reject) => {
      if (method == 'put') {
        this.http.put(fullURL, payload, headers).subscribe({
          next: (response: any) => {
            resolve(response);
          },
          error: (error: any) => {
            reject(error);
          }
        })
      } else {
        this.http.post(fullURL, payload, headers).subscribe({
          next: (response: any) => {
            resolve(response);
          },
          error: (error: any) => {
            reject(error);
          }
        })
      }
    })
  }
}
