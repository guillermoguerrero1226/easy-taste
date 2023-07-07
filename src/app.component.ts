import { Component } from '@angular/core';
import { CreateUserUseCase, UserState, UserType } from 'src/domain/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'easy-taste';


constructor(
    private userUseCase: CreateUserUseCase
  ) { }

  ngOnInit() {
     const user =  this.userUseCase.execute({
      id: "1234",
      fullName: "Guillermo Guerrero",
      phoneNum: "+573213350338",
      email: "guillermoguerrero1226@gmail.com",
      state: UserState.Active,
      type: UserType.Admin
    })

    user.subscribe((user) => console.log(JSON.stringify(user)));
  }

}

