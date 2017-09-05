import { Component, OnInit, OnDestroy } from '@angular/core';
import { RealTimeService } from '../realtime.service';

@Component({
  selector: 'app-real-time-chat',
  templateUrl: './real-time-chat.component.html',
  styleUrls: ['./real-time-chat.component.css']
})
export class RealTimeChatComponent implements OnInit, OnDestroy {

  messages = [];
  connection;
  message;

  constructor(private realTimeService: RealTimeService ) { }

  ngOnInit() {

    this.connection = this.realTimeService.getMessages().subscribe((message) => {
      this.messages.push(message);
    });

  }

  sendMessage() {
    this.realTimeService.sendMessage(this.message);
    this.message = '';
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }


}
