import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-routes',
  imports: [],
  templateUrl: './dynamic-routes.html',
  styleUrl: './dynamic-routes.css'
})
export class DynamicRoutes {
users = [
    { id: 1, name: 'Anil', age: 28, email: 'anil@test.com' },
    { id: 2, name: 'Sidhu', age: 25, email: 'sidhu@test.com' },
    { id: 3, name: 'Sam', age: 30, email: 'sam@test.com' },
    { id: 4, name: 'Peter', age: 22, email: 'peter@test.com' },
    { id: 5, name: 'Bruce', age: 35, email: 'bruce@test.com' },
    { id: 6, name: 'John', age: 29, email: 'john@test.com' }
  ];
}
