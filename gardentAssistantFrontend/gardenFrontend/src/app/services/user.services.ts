import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/user";
import { LoginUser } from "../models/loginUser";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: "root"
})
export class UserService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) { }

    public getUsers(): Observable<User[]>{
        return this.http.get<User[]>(`${this.apiServerUrl}/user/all`);
    }

    // return the jwt token in Bearer
    public register(user : User): Observable<string>{
        return this.http.post<string>(`${this.apiServerUrl}/auth/register`, user);        
    }

    // return the jwt token in Bearer
    public login(loginUser: LoginUser): Observable<string>{
        return this.http.post<string>(`${this.apiServerUrl}/auth/login`, loginUser);
    }
}