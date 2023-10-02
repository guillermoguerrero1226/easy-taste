import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Dish } from '../../../domain/dish/models/dish.model';

export abstract class  DishService {
 abstract getDishes(): Observable<Dish[]>;
}