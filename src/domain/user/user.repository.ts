import { Observable } from 'rxjs';
import { User } from './models/user.model';

export abstract class UserRepository {
  abstract login(params: {username: string, password: string}): Observable<User>;
  abstract register(userInfo: User): Observable<User>;
  abstract getUserProfile(): Observable<User>;
}