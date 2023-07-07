import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './view/modules/home/home.module';
 
@NgModule({
  imports: [
    CommonModule,
    HomeModule
  ],
  providers: [],
})
export class PresentationModule { }