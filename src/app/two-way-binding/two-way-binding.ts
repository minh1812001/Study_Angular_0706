import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-binding',
  imports: [FormsModule],
  templateUrl: './two-way-binding.html',
  styleUrl: './two-way-binding.css'
})
export class TwoWayBinding {
name="MinhLH29";
changeName(event:Event){
  const val = (event.target as HTMLInputElement).value
  this.name=val
}
}
