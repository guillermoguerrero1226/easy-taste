import { Usecase } from "src/domain/base/use-case.interface";
import { User } from "../models/user.model";
import { UserRepository } from '../user.repository';
import { UserState } from '../enums/userState.enum';
import { UserType } from "../enums/userType.enum";
import { Observable } from 'rxjs';

export abstract class CreateUserUseCase implements Usecase<User> {
  abstract execute(params: User): Observable<User>;
}

export class CreateUserUsecaseImpl implements CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  execute(user: User): Observable<User> {
    return this.userRepository.register({
      id: "12243",
      fullName: "Guillermo Guerrero",
      phoneNum: "+573213350338",
      email: "guillermoguerrero1226@gmail.com",
      state: UserState.Active,
      type: UserType.Admin
    })
  }
}