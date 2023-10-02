import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CreateUserUseCase, CreateUserUsecaseImpl, UserRepository } from 'src/domain/user';
import { UserRepositoryImplementation } from './user/userRepository.implementation';
import { DishService } from './services/dish/dish.service';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { DishServiceImplementation } from './services/dish/dish.service.implementation';
import { DishRepository } from '../domain/dish/dish.repository';
import { GetDishesUseCase, GetDishesUsecaseImplementation } from '../domain/dish/usecases/GetDishesUseCase';
import { DishRepositoryImplementation } from './dish/dishRepository.implementation';

const userRegisterUseCaseFactory = 
(userRepo: UserRepository) => new CreateUserUsecaseImpl(userRepo);
export const userRegisterUseCaseProvider = {
    provide: CreateUserUseCase,
    useFactory: userRegisterUseCaseFactory,
    deps: [UserRepository],
};

const getDishesUseCaseFactory = 
(userRepo: DishRepository) => new GetDishesUsecaseImplementation(userRepo);
export const getDishesUseCaseProvider = {
    provide: GetDishesUseCase,
    useFactory: getDishesUseCaseFactory,
    deps: [DishRepository],
};

@NgModule({
    providers: [
        userRegisterUseCaseProvider,
        getDishesUseCaseProvider,
        { provide: UserRepository, useClass: UserRepositoryImplementation },
        {provide: DishRepository, useClass: DishRepositoryImplementation},
        { provide: DishService, useClass: DishServiceImplementation }
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule
    ],
})
export class DataModule { }