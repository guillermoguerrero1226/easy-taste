import { Observable } from 'rxjs';
import { Dish } from './models/dish.model';

export abstract class DishRepository {
  abstract get(): Observable<Dish[]>;
}