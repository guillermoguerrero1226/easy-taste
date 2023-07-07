import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CreateUserUseCase, CreateUserUsecaseImpl, UserRepository } from 'src/domain/user';
import { UserRepositoryImplementation } from './user/userRepository.implementation';


const userRegisterUseCaseFactory = 
(userRepo: UserRepository) => new CreateUserUsecaseImpl(userRepo);
export const userRegisterUseCaseProvider = {
    provide: CreateUserUseCase,
    useFactory: userRegisterUseCaseFactory,
    deps: [UserRepository],
};

@NgModule({
    providers: [
        userRegisterUseCaseProvider,
        { provide: UserRepository, useClass: UserRepositoryImplementation },
    ],
    imports: [
        CommonModule,
        HttpClientModule,
    ],
})
export class DataModule { }