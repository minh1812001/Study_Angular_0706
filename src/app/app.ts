import { Component, Directive } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Switch } from './switch/switch';
import { Imputfield } from './imputfield/imputfield';
import { Counter } from "./counter/counter";
import { TwoWayBinding } from './two-way-binding/two-way-binding';
import { FormsModule } from '@angular/forms';
import { TodoList } from './todo-list/todo-list';
import { DynamicStyling } from './dynamic-styling/dynamic-styling';
import { DirectiveFor } from './directive-for/directive-for';
import { DynamicRoutes } from './dynamic-routes/dynamic-routes';

@Component({
  selector: 'app-root',
  imports: [FormsModule ,Switch, Imputfield, Counter, TwoWayBinding, TodoList, DynamicStyling, DirectiveFor, DynamicRoutes, RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   title = 'Study_Angular_0706';
   name = 'Lee Huuwx Minh';
   hello(){
    let x = 10;
   }
   users = [
    { id: 1, name: 'Anil', age: 28, email: 'anil@test.com' },
    { id: 2, name: 'Sidhu', age: 25, email: 'sidhu@test.com' },
    { id: 3, name: 'Sam', age: 30, email: 'sam@test.com' },
    { id: 4, name: 'Peter', age: 22, email: 'peter@test.com' },
    { id: 5, name: 'Bruce', age: 35, email: 'bruce@test.com' },
    { id: 6, name: 'John', age: 29, email: 'john@test.com' }
  ];
}
