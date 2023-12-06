import React from "react";
import { Reservation } from "../models/reservation";

interface ReservationCardProps {
  reservation: Reservation;
}

const ReservationCard: React.FC<ReservationCardProps> = ({ reservation }) => {
  const {
    guestName,
    checkInDate,
    checkOutDate,
    totalCost,
    hotelName,
    hotelLocation,
    noOfNights,
  } = reservation;

  return (
    <div className="border rounded-lg p-4 mb-4">
      <div className="text-xl font-bold mb-2">{guestName}</div>
      <div className="text-gray-600 mb-2">
        Check-in: {new Date(checkInDate).toLocaleDateString()} | Check-out:{" "}
        {new Date(checkOutDate).toLocaleDateString()}
      </div>
      <div className="text-lg font-bold">Total Cost: ${totalCost}</div>
      <div className="mt-4">
        <div className="text-lg font-bold mb-2">{hotelName}</div>
        <div className="text-gray-600">{hotelLocation}</div>
        <div className="text-gray-600">Number of Nights: {noOfNights}</div>
      </div>
    </div>
  );
};

export default ReservationCard;
