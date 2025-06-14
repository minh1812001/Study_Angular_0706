import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  imports: [FormsModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css'
})
export class TodoList {
task: string = ''; // Thuộc tính để lưu trữ giá trị từ trường nhập liệu nhiệm vụ [1]
  taskList: { id: number, task: string }[] = []; // Mảng để lưu trữ danh sách các nhiệm vụ [1]

  constructor() { }

  addTask(): void {
    if (this.task.trim() === '') { // Kiểm tra nếu nhiệm vụ rỗng thì không thêm
      return;
    }

    const newTask = {
      id: this.taskList.length + 1, // Tạo ID duy nhất dựa trên độ dài mảng [2, 3]
      task: this.task // Lấy nội dung nhiệm vụ từ trường nhập liệu [3]
    };

    this.taskList.push(newTask); // Thêm nhiệm vụ mới vào danh sách [2]
    this.task = ''; // Xóa nội dung trong trường nhập liệu sau khi thêm [4]
    console.log(this.taskList); // In danh sách nhiệm vụ ra console để kiểm tra [3]
  }

  deleteTask(taskId: number): void {
    // Lọc bỏ nhiệm vụ có taskId trùng khớp khỏi danh sách [4, 5]
    this.taskList = this.taskList.filter(item => item.id !== taskId);
    console.log("Task deleted. Updated list:", this.taskList); // In danh sách đã cập nhật
  }
}
