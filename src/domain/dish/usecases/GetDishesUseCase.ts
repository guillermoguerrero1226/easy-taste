import { Usecase } from "src/domain/base/use-case.interface";
import { Observable } from 'rxjs';
import { Dish } from "../models/dish.model";
import { DishRepository } from "../dish.repository";

export abstract class GetDishesUseCase implements Usecase<Dish[]> {
  abstract execute(): Observable<Dish[]>;
}

export class GetDishesUsecaseImplementation implements GetDishesUseCase {
  constructor(private userRepository: DishRepository) {}

  execute(): Observable<Dish[]> {
    return this.userRepository.get()
  }
}