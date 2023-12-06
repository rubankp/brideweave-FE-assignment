import React from "react";
import { Hotel } from "../models/hotel";
import { useAppContext } from "../context/Appcontext";
import HotelDetails from "./HotelDetails";

type HotelCardProps = {
  hotel: Hotel;
  handleReservationClick: (hotel: Hotel) => void;
};

function HotelCard({ hotel, handleReservationClick }: HotelCardProps) {
  const { reservations } = useAppContext();
  return (
    <div
      key={hotel.id}
      className="mb-4 p-4 border rounded-lg shadow-md flex justify-between items-center"
    >
      <div>
        <HotelDetails hotel={hotel} />
      </div>
      <div>
        <button
          className={`bg-primary text-white py-2 px-4 rounded`}
          onClick={() => handleReservationClick(hotel)}
        >
          Reserve
        </button>
      </div>
    </div>
  );
}

export default HotelCard;
