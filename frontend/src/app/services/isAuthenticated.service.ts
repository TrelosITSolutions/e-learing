import { HttpHeaders, HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Injectable } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Injectable()
export class IsAuthenticatedService {
    role = null;
    constructor(protected localStorage: LocalStorage) { }
    isAuthenticated() {
        const promise = new Promise(
            (resolve, reject) => {
                this.localStorage.getItem('token').subscribe((token) => {
                    if (token) {
                        this.role = token.role;
                        resolve(true)
                    }
                  });
                });
            return promise;
    }
}