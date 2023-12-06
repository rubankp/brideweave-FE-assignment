import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/Appcontext";
import ReservationCard from "./ReservationCard";

const ReservationDetails: React.FC = () => {
  const { reservations } = useAppContext();

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold mb-4">Reservation Details </h2>
        <Link to="/" className="block bg-primary text-white py-2 px-4 rounded">
          Back
        </Link>
      </div>
      {reservations.length === 0 ? (
        <p>No hotels reserved.</p>
      ) : (
        <div>
          {reservations.length} hotel(s) reserved.
          {reservations.map((reservation) => (
            <ReservationCard key={reservation.id} reservation={reservation} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ReservationDetails;
