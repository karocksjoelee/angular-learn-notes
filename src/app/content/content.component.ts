import { Component, OnInit } from '@angular/core';
import { Course } from '../shared/models/course';
import { CoursesService } from '../shared/services/course.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  courses: Course[];

  constructor(private _coursesService: CoursesService) { }

  ngOnInit() {
    this.courses = this._coursesService.getCourses();
  }

}
