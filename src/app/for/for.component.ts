import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent implements OnInit {
  bg = false;

  constructor() {
  }

  courses: any;

  ngOnInit(): void {
  }

  onBgColor(): any {
     this.bg = true;
  }

  addCourse(): any{
    this.courses.push({id: 1, Name: 'Course4'});
  }

  removeCourse($event: any): any{
    const index = this.courses.indexOf($event);
    this.courses.splice(index, 1);
  }

  updateCourse($event: any): void {
    $event.Name = 'Updated';
  }

  loadCourse(): void{
    this.courses = [
      {id: 1, Name: 'Course1'},
      {id: 2, Name: 'Course2'},
      {id: 3, Name: 'Course3'}
    ];
  }

  trackCourse(index: number, course: any): any{
    return course ? course.id : undefined;
  }

}
