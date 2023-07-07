import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/domain/user';
import { UserRepository } from '../../domain/user/user.repository';

@Injectable({
    providedIn: 'root',
})
export class UserRepositoryImplementation implements UserRepository {
    
    constructor(private http: HttpClient) {
    }
    
    login(params: { username: string; password: string; }): Observable<User> {
        throw new Error('Method not implemented.');
    }
    register(userInfo: User): Observable<User> {
       return of(userInfo);
    }
    getUserProfile(): Observable<User> {
        throw new Error('Method not implemented.');
    }

}