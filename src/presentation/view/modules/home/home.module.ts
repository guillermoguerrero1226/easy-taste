import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home.component';

import { ReactiveFormsModule } from '@angular/forms';
import { DishComponent } from './components/dish/dish.component';

 
@NgModule({
  declarations: [HomeComponent, DishComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
})
export class HomeModule { }