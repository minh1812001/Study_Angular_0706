import { Component } from '@angular/core';

@Component({
  selector: 'app-imputfield',
  imports: [],
  templateUrl: './imputfield.html',
  styleUrl: './imputfield.css'
})
export class Imputfield {
 // Biến cho ví dụ cách 1 (Sự kiện)
  userName: string = '';
  displayUserName: boolean = false;

  // Biến cho ví dụ cách 2 (Biến Tham Chiếu Template)
  userEmail: string = '';
  displayUserEmail: boolean = false;

  // Hàm xử lý sự kiện (input) để lấy giá trị tên người dùng
  getName(event: Event) {
    // Ép kiểu event.target thành HTMLInputElement để truy cập thuộc tính .value
    const inputElement = event.target as HTMLInputElement;
    this.userName = inputElement.value; // Gán giá trị vào thuộc tính userName
    // console.log('Tên đã nhập (theo thời gian thực):', this.userName);
  }

  // Hàm hiển thị tên người dùng sau khi nút "Hiện Tên Đã Nhập" được click
  showUserName() {
    this.displayUserName = true;
    // console.log('Tên hiển thị sau click:', this.userName);
  }

  // Hàm đặt tên mặc định cho thuộc tính userName (không trực tiếp đặt vào input field đầu tiên)
  setDefaultName() {
    this.userName = 'Anil Sidhu'; // Đặt giá trị mặc định cho biến TS
    this.displayUserName = true;
    // console.log('Đã đặt tên mặc định:', this.userName);
  }

  // Hàm lấy giá trị email từ trường nhập sử dụng biến tham chiếu template
  getEmail(value: string) {
    this.userEmail = value; // Gán giá trị lấy được vào thuộc tính userEmail
    this.displayUserEmail = true;
    // console.log('Email lấy từ trường nhập:', this.userEmail);
  }

  // Hàm đặt giá trị email mặc định trực tiếp vào trường nhập sử dụng biến tham chiếu template
  setEmail(emailInput: HTMLInputElement) {
    emailInput.value = 'default@example.com'; // Đặt giá trị trực tiếp vào trường nhập
    this.userEmail = emailInput.value; // Cập nhật biến TS để hiển thị trên UI
    this.displayUserEmail = true;
    // console.log('Đã đặt email mặc định vào trường nhập:', emailInput.value);
  }
}
