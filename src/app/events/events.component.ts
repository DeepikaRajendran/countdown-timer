import { Component, OnInit } from '@angular/core';
import { EventsService} from '../events.service';
import { Event } from './../models/event.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: Event[];
  constructor(private eventService: EventsService) { }

  ngOnInit() {
    this.eventService.eventState
    .subscribe((events) => {
      this.events = events;
    });
  }

}
