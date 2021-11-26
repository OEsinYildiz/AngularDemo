import {Component, OnInit} from '@angular/core';
import {CourseService} from './course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(service: CourseService) {
    this.courses = service.getCourses();
  }

  title = 'Courses';
  courses;
  isActive = true;
  email: any;
  lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad asperiores assumenda consectetur culpa eaque, ipsa, maiores neque nihil omnis quam quidem quos repudiandae rerum vitae voluptas voluptatum. Deserunt, molestiae!\n';
  course = {
    title: 'Angular Course',
    rating: 4.97,
    student: 30123,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1)
  };

  onDivClick(): void {
    console.log('Div was click');
  }

  // @ts-ignore
  onSave($event): void {
    $event.stopPropagation(); // bubling i durdurmak için bu metodu kullanıyoruz.
    console.log('Button click', $event);
  }

  onKeyUp(): void {
    console.log('Entered data');
  }

  onKeyUpEmail(): void {
    console.log(this.email);
  }

  getTitle(): string {
    return this.title;
  }

  ngOnInit(): void {
  }

}
