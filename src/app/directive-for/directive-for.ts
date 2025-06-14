import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-for',
  standalone: true, 
  imports: [NgFor, NgIf],
  templateUrl: './directive-for.html',
  styleUrl: './directive-for.css'
})
export class DirectiveFor {
 // Ví dụ 1: Mảng chuỗi đơn giản
  users: string[] = ['Anil', 'Sam', 'Peter', 'Vinay', 'Bruce', 'Tony']; 
  // Ví dụ 2: Mảng các đối tượng
  studentsData: Array<{ id: number; name: string; age: number; email: string }> = [ 
    { id: 1, name: 'Anil', age: 29, email: 'anil@test.com' },
    { id: 2, name: 'Sam', age: 23, email: 'sam@example.com' },
    { id: 3, name: 'Peter', age: 45, email: 'peter@domain.com' },
    { id: 4, name: 'Bruce', age: 10, email: 'bruce@web.com' },
    { id: 5, name: 'Tony', age: 33, email: 'tony@code.com' }
  ];

  // Hàm xử lý sự kiện click cho từng sinh viên trong vòng lặp
  getStudentDetails(studentName: string, studentId: number): void { 
    console.log(`Chi tiết sinh viên: Tên - ${studentName}, ID - ${studentId}`);
    alert(`Bạn đã chọn sinh viên: ${studentName} (ID: ${studentId})`);
  }

  // Hàm trackBy cho mảng đối tượng (quan trọng cho hiệu suất) [1]
  trackByStudentId(index: number, student: { id: number }): number { 
    return student.id; 
  }

  // Hàm trackBy cho mảng chuỗi (tùy chọn nhưng là cách hay để theo dõi các phần tử duy nhất)
  trackByUser(index: number, user: string): string {
    return user; 
  }
}
