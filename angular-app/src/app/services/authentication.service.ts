import { BehaviorSubject, Observable, map } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { IToken } from "../models/token";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
export const ACCES_TOKEN_KEY = 'access_token'

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})

export class AuthenticationService {
    constructor(
        private http: HttpClient,
        private router: Router
    ) {}

    public get logIn(): boolean {
        return !!localStorage.getItem(ACCES_TOKEN_KEY);
      }
    

    register(username: string, password: string): Observable<any> {
        return this.http.post(`http://localhost:5000/auth/registration`, {
            username,
            password
        })
    }

    login(username: string, password: string): Observable<string> {
        return this.http.post<IToken>(`http://localhost:5000/auth/login`, { username, password })
            .pipe(
                map(({ token }) => {
                    localStorage.setItem(ACCES_TOKEN_KEY, JSON.stringify(token));
                    this.router.navigate(['']);

                    return token;
                }
            ));
    }

    logout(): void {
        localStorage.removeItem(ACCES_TOKEN_KEY);
        this.router.navigate(['login']);
    }

    redirect(): void {
        if (!this.logIn) {
            this.router.navigate(['login']);
        }
    }
}