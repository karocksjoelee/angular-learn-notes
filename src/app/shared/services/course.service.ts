import { Course } from '../models/course';
import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService {

  courses: Course[] = [
    {
      name: 'Basic Chatting Service',
      description: 'unfinished',
      sourceTag: 'none',
      ngRoutePath: '/chat'
    },
    {
      name: 'RX-JS CRUD Example',
      description: 'unfinished',
      sourceTag: 'Reactive-Anguar',
      ngRoutePath: '/rx-crud'
    },
    {
      name: 'RxJS Chat',
      description: 'unfinished',
      sourceTag: 'ngbook-2',
      ngRoutePath: '/rx-chat'
    }
  ];

  constructor() { }

  getCourses() {
    return this.courses;
  }
}
