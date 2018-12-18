import { HttpHeaders, HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Injectable()
export class AdminAuthService {
    loggedIn = false;
    isAdmin = false;
    constructor(private http: HttpClient, protected localStorage: LocalStorage) { }
    login(credentials) {
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        return this.http.post(environment.apiUrl + '/api/admin/login', JSON.stringify(credentials), { headers });
    }
    isAdminAuthenticated() {
        const promise = new Promise(
            (resolve, reject) => {
                this.localStorage.getItem('token').subscribe((token) => {
                    if (token && token.role === 'admin'){
                    this.loggedIn = true;
                    this.isAdmin = true;
                    console.log(this.isAdmin);
                    console.log(this.loggedIn);
                    resolve(true);
                    } else {resolve(false); }
                  });
            }
          );
          return promise;
    }
}