import { HttpHeaders, HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Injectable()
export class StudentAuthService {
    loggedIn = false;
    isStudent = false;
    constructor(private http: HttpClient, protected localStorage: LocalStorage) { }
    login(credentials) {
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        return this.http.post(environment.apiUrl + '/api/student/login', credentials, { headers });
    }
    isStudentAuthenticated(){
        const promise = new Promise(
            (resolve, reject) => {
                this.localStorage.getItem('token').subscribe((token) => {
                    if (token && token.role === 'student'){
                    this.loggedIn = true;
                    this.isStudent = true;
                    console.log(this.isStudent);
                    console.log(this.loggedIn);
                    resolve(true);
                    } else {resolve(false); }
                  });
            }
          );
          return promise;
    }
}