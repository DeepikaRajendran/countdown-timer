import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './environments/environment';
import { Event } from './models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  baseURL = environment.baseUrl;
  eventURL = environment.eventURL;

  constructor(private http: HttpClient) { }

  createEvent(event: Event) {
    console.log(`${this.baseURL}${this.eventURL}/`);
    return this.http.post(`${this.baseURL}${this.eventURL}/`, event);
  }

   updateEvent(event: Event) {}

   deleteEvent(id: number) {}

   getEventById(id: number) {}

   getEvents() {
    return this.http.get(`${this.baseURL}${this.eventURL}/`);
   }
}
