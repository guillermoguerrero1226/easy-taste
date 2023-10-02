// firestore.service.ts

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { from, Observable } from 'rxjs';
import { Dish } from 'src/domain/dish';
import { DishService } from './dish.service';

@Injectable()
export class DishServiceImplementation implements DishService {
  
  private collection: AngularFirestoreCollection<Dish>;

 
  constructor(private firestore: AngularFirestore) {
    this.collection = this.firestore.collection<Dish>('dishes');
  }
  getDishes(): Observable<Dish[]> {
    return this.collection.valueChanges();
  }
}
