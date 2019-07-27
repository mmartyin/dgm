import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login';
import { map, catchError } from 'rxjs/operators'; 


@Injectable()
export class LoginService{

    constructor(private _httpService: Http){}

    // getLogin(): Observable<Login[]>{
    //     return this._httpService.get("")
    //     .pipe(map((response: Response) => response.json()))
    //     .pipe(catchError(this.handleError));
    // }

    // private handleError(error: Response){
    //     return Observable.throw(error);
    // }


    checkLogin(login: Login){
        let body = JSON.stringify(login);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        console.log(body);
        return this._httpService.post("https://ngtest-9c798.firebaseio.com/posts.json", body, options);

    }


    
}