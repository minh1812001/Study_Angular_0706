import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {
 lastEventType: string = 'Chưa có sự kiện nào'; // Để hiển thị trạng thái ban đầu
  lastInputValue: string = '';

  /**
   * Xử lý tất cả các sự kiện
   * @param event Đối tượng sự kiện được truyền từ template
   */
  handleEvent(event: Event): void {
    // Cập nhật loại sự kiện cuối cùng
    this.lastEventType = event.type;
    console.log(`Hàm được gọi: Sự kiện '${event.type}'`); [1]

    // Kiểm tra nếu sự kiện đến từ một trường nhập liệu (input, textarea, select)
    if (event.target instanceof HTMLInputElement) { // Ép kiểu event.target thành HTMLInputElement [5]
      this.lastInputValue = event.target.value;
      console.log('Giá trị nhập:', this.lastInputValue); [6]
    } else {
      // Xóa giá trị nhập nếu sự kiện không phải từ trường nhập liệu
      this.lastInputValue = '';
    }

  }
}
