import { Observable } from 'rxjs';
export interface Usecase<T> {
    execute(params: T): Observable<T>;

}