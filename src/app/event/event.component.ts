import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  eventForm;
  
  get name(): string {
    return this.eventForm.get('name');
  }

  get date(): string {
    return this.eventForm.get('date');
  }

  constructor(private formBuilder: FormBuilder, private eventService: EventsService) {
    this.eventForm = this.formBuilder.group({
        name: new FormControl('', Validators.required),
        date: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {

  }

  onSubmit(formValue) {
     this.eventService.createEvent(formValue).subscribe((res) => {
      console.log(res);
       this.eventForm.reset();
     });
  }
}

