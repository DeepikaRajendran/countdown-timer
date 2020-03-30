import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-show-timer',
  templateUrl: './show-timer.component.html',
  styleUrls: ['./show-timer.component.css']
})
export class ShowTimerComponent implements OnInit {
  // date: Date;
  days = 0;
  hrs = 0;
  mins = 0;
  secs = 0;
  @Input() date: Date;

  constructor() { }

  ngOnInit() {
    setInterval( () => {
      this.calculateTime(this.date);
    }, 1000);
  }

  updateTimer() {
    // console.log(this.date);
  }

  calculateTime(date) {
    const currentDate = new Date().getTime();
    const targetDate =  new Date(date).getTime();
    const diff = targetDate - currentDate;
    if (diff > 0) {
      this.days = Math.floor(diff / (1000 * 60 * 60 * 24));
      this.hrs = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.mins = Math.floor( (diff % (1000 * 60 * 60 )) / (1000 * 60));
      this.secs = Math.floor((diff % (1000 * 60 )) / (1000));
    }
  }

}
