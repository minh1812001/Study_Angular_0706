import { Component, Directive } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Switch } from './switch/switch';
import { Imputfield } from './imputfield/imputfield';
import { Counter } from "./counter/counter";
import { TwoWayBinding } from './two-way-binding/two-way-binding';
import { FormsModule } from '@angular/forms';
import { TodoList } from './todo-list/todo-list';
import { DynamicStyling } from './dynamic-styling/dynamic-styling';
import { DirectiveFor } from './directive-for/directive-for';

@Component({
  selector: 'app-root',
  imports: [FormsModule ,Switch, Imputfield, Counter, TwoWayBinding, TodoList, DynamicStyling, DirectiveFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   title = 'Study_Angular_0706';
   name = 'Lee Huuwx Minh';
   hello(){
    let x = 10;
   }
}
