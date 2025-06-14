import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-styling',
  imports: [],
  templateUrl: './dynamic-styling.html',
  styleUrl: './dynamic-styling.css'
})
export class DynamicStyling {
 // Ví dụ 1: Định kiểu động cơ bản
  bgColor: string = 'green'; 
  fontSizePx: number = 80;   

  // Ví dụ 2: Định kiểu động có điều kiện
  isZoomed: boolean = true;
  bigSizePx: string = '80px'; 
  smallSizePx: string = '30px'; 

  // Hàm để chuyển đổi trạng thái của isZoomed
  toggleSize(): void {
    this.isZoomed = !this.isZoomed; 
  }
}
