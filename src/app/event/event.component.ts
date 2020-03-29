import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  eventForm;
  event: Events = {
    name: '',
    date: new Date()
  };


  get name(): string {
    return this.eventForm.get('name');
  }

  get date(): string {
    return this.eventForm.get('date');
  }

  constructor(private formBuilder: FormBuilder) {
    this.eventForm = this.formBuilder.group({
        name: new FormControl('', Validators.required),
        date: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }

  onSubmit(formValue) {
     console.log(formValue);
  }

}

interface Events {
   name: string;
   date: Date;
}
