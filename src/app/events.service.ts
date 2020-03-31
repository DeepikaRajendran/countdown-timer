import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './environments/environment';
import { Event } from './models/event.model';
import { BehaviorSubject, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class EventsService {
  baseURL = environment.baseUrl;
  eventURL = environment.eventURL;
  eventSubject = new BehaviorSubject < Event[] > ([]);
  eventState = this.eventSubject.asObservable();
  constructor(private http: HttpClient) {
    this.getEvents();
  }

  createEvent(event: Event) {
    this.http.post(`${this.baseURL}${this.eventURL}/`, event).subscribe((data: Event[]) => {
      this.getEvents();
    });
  }

   updateEvent(event: Event) {}

   deleteEvent(id: number) {}

   getEventById(id: number) {}

   getEvents(): void {
    this.http.get(`${this.baseURL}${this.eventURL}/`).subscribe((events: Event[]) => {
      this.eventSubject.next(events);
    });
   }
}
