import { Component } from '@angular/core';
import { CreateUserUseCase, UserState, UserType } from 'src/domain/user';
import { GetDishesUseCase } from './domain/dish/usecases/GetDishesUseCase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'easy-taste';

}

