import { Component, OnInit } from '@angular/core';
import { RealTimeService } from './realtime.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Angular App Works !';

  constructor() { }

  ngOnInit() {

  }

}
