import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DishRepository } from '../../domain/dish/dish.repository';
import { Dish } from 'src/domain/dish';
import { DishService } from '../services/dish/dish.service';


@Injectable({
    providedIn: 'root',
})
export class DishRepositoryImplementation implements DishRepository {
    
    constructor(private dishService: DishService) {
    }
    get(): Observable<Dish[]> {
      return this.dishService.getDishes();
    }
    
    

}