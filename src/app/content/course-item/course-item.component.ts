import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../../shared/models/course';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {
  @Input() course: Course;

  constructor() { }

  ngOnInit() {
  }

}