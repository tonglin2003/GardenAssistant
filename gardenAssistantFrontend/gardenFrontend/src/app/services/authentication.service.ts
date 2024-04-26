import {inject, Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {AuthToken} from "../models/token.model";
import {CookieService} from "ngx-cookie-service";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService{
    private apiUrl = environment.apiBaseUrl;
    cookieService = inject(CookieService);

    // set the token and userId into the cookie
    setTokenInCookie(token: string, userId: string) {
        this.cookieService.set('authToken', token);
        this.cookieService.set('userId', userId);
    }

    // return the token from the cookie
    getTokenCookie(){
        return this.cookieService.get('authToken');
    }

    getUserId(){
        return this.cookieService.get('userId');
    }

    async submitLogin(account: string, password: string): Promise<Boolean>{
        const url = `${this.apiUrl}/auth/authenticate`;
        const loginBody = {
            account: account,
            password: password
        };
        try{
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginBody)
            });
            if (!response.ok) {
                return false;
            }
            const data = await response.json();
            this.setTokenInCookie(data.token, data.userId);
            return true;
        } catch (error) {
            console.error('Error:', error);
            return false;
        }
    }

    async submitSignUp(username: string, avatarUrl: String, account: string, password: string){
        const url = `${this.apiUrl}/auth/register`;
        const signUpBody = {
            username: username,
            avatarUrl: avatarUrl,
            account: account,
            password: password
        }

        try{
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signUpBody)
            });

            if (!response.ok) {
                return false;
            }

            const data = await response.json();
            this.setTokenInCookie(data.token, data.userId);
            return true;

        } catch(error){
            console.error('Error:', error);
            return false;
        }
    }

    clearTokenInCookie(){
        this.cookieService.delete('authToken');
        this.cookieService.delete('userId');
    }
    // todo when log out, need to tell the backend to logout too

}
