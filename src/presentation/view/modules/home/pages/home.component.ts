/* eslint-disable @angular-eslint/use-lifecycle-interface */
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GetDishesUseCase, Dish } from 'src/domain/dish';
import {
  BreakpointObserver,
  BreakpointState,
  Breakpoints
} from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
  title = 'Easy Taste';
  dishesToDisplay:Dish[] = [];
  public inputControl: FormControl;
  cols = 1;
  gridByBreakpoint = {
    lg: 6,
    md: 4,
    sm: 2,
    xs: 1
  }
  constructor(
    private dishUseCase: GetDishesUseCase,
    public breakpointObserver: BreakpointObserver
  ) { }

  resizeLayout() {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large
    ]).subscribe((state: BreakpointState) => {
      if (state.breakpoints[Breakpoints.XSmall] || state.breakpoints[Breakpoints.Small]) {
        console.log("xs")
       this.cols = this.gridByBreakpoint.xs
      }
      if (state.breakpoints[Breakpoints.Medium]) {
        console.log("md")
        this.cols = this.gridByBreakpoint.md
       }
       if (state.breakpoints[Breakpoints.Large]) {
        console.log("lg")
        this.cols = this.gridByBreakpoint.lg
       }
      
     
    });
  }

  ngOnInit() {
    this.inputControl = new FormControl();
    const getDishesReponse =  this.dishUseCase.execute()
    getDishesReponse.subscribe((dishes) =>  this.dishesToDisplay = dishes);
    this.resizeLayout();
  }

  onResize(event) {
    this.resizeLayout();
  }
}


