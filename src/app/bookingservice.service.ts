import { Injectable } from '@angular/core';
export interface Room {
  name: string;
  initialCapacity: number;
  available: number;
}

export interface Booking {
  room: string;
  date: string;
  startTime: string;
  endTime: string;
  title: string;
}
@Injectable({
  providedIn: 'root'
})
export class BookingserviceService {

  rooms: Room[] = [
    { name: 'Conference Room A', initialCapacity: 10, available: 10 },
    { name: 'Meeting Room B', initialCapacity: 6, available: 6 },
    { name: 'Board Room C', initialCapacity: 20, available: 20 }
  ];

  bookings: Booking[] = [];

  constructor() { }

  getRooms(): Room[] {
    return this.rooms;
  }

  addBooking(booking: Booking): void {
    const room = this.rooms.find(r => r.name === booking.room);
    if (room && room.available > 0) {
      this.bookings.push(booking);
      room.available -= 1;
    }
  }

  getBookings(): Booking[] {
    return this.bookings;
  }
}