import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  student: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentService: StudentService
  ) {}

  onDelete() {
    const studentIdString = this.route.snapshot.paramMap.get('id');
    
    if (studentIdString !== null) {
      const studentId = +studentIdString;
      this.studentService.deleteStudent(studentId).subscribe(() => {
        // Redirect to a different page or perform other actions after deletion
        this.router.navigate(['/']);
      });
    } else {
      console.error('Invalid student ID');
      // Handle the case where the ID is null (optional, depending on your requirements)
    }
  }
  

  ngOnInit() {
    const studentId = this.route.snapshot.paramMap.get('id');
    if (studentId !== null) {
      const parsedStudentId = +studentId;
      this.studentService.getStudentById(parsedStudentId).subscribe(data => {
        this.student = data;
      });
    } else {
      console.error('Student ID is null.');
    }

  }
}
