export interface Reservation {
  id: number;
  hotelId: number;
  hotelName: string;
  guestName: string;
  checkInDate: Date;
  checkOutDate: Date;
  totalCost: number;
  hotelLocation: string;
  noOfNights: number;
}
