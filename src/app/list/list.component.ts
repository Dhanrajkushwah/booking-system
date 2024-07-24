import { Component, OnInit } from '@angular/core';
import { Room, Booking, BookingserviceService } from '../bookingservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  rooms: Room[] = [];
  bookings: Booking[] = [];
  bookingForm: FormGroup;
  ckDep:boolean =false;
  constructor(private bookingService: BookingserviceService, private fb: FormBuilder) { 
    this.bookingForm = this.fb.group({
      room: ['', Validators.required],
      date: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      title: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  ngOnInit(): void {
    this.rooms = this.bookingService.getRooms();
    this.bookings = this.bookingService.getBookings();
  }

  bookRoom(): void {
    if (this.bookingForm.invalid) {
      this.ckDep = true;
      return
    } else {
      
      console.log("register",this.bookingForm.value)
      this.bookingService.addBooking(this.bookingForm.value);
      this.bookings = this.bookingService.getBookings();
      this.bookingForm.reset();
     
    }
  }
  
}