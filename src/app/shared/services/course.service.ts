import { Course } from '../models/course';
import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService {

  courses: Course[] = [
    {
      name: 'Reddit-Clone',
      description: 'Finished - *ngFor="let article of sortedArticles()" ',
      sourceTag: 'ng-book-2',
      ngRoutePath: '/reddit'
    },
    {
      name: 'Inventory Managment App',
      description: 'unfinished',
      sourceTag: 'ng-book-2',
      ngRoutePath: '/inventory'
    },
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
