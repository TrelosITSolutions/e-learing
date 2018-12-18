import { HttpHeaders, HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Injectable()
export class ParentAuthService {
    loggedIn = false;
    isParent = false;
    constructor(private http: HttpClient, protected localStorage: LocalStorage) { }
    login(credentials) {
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'appliation/json');
        return this.http.post(environment.apiUrl + '/api/parent/login', credentials, { headers });
    }
    register(credentials) {
        console.log(credentials);
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'appliation/json');
        return this.http.post(environment.apiUrl + '/api/parent/signup', credentials, { headers });
    }
    isParentAuthenticated(){
        const promise = new Promise(
            (resolve, reject) => {
                this.localStorage.getItem('token').subscribe((token) => {
                    if (token && token.role === 'parent'){
                    this.loggedIn = true;
                    this.isParent = true;
                    console.log(this.isParent);
                    console.log(this.loggedIn);
                    resolve(true);
                    } else {resolve(false); }
                  });
            }
          );
          return promise;
    }
}