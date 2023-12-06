import React, { useState } from "react";
import HotelDetails from "./HotelDetails";
import { Reservation } from "../models/reservation";

interface ReservationModalProps {
  hotel: { id: number; name: string; pricePerNight: number; location: string };
  isOpen: boolean;
  setReservations: React.Dispatch<React.SetStateAction<Reservation[]>>;
  onClose: () => void;
}

const ReservationModal: React.FC<ReservationModalProps> = ({
  hotel,
  isOpen,
  onClose,
  setReservations,
}) => {
  const [guestName, setGuestName] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  const calculateTotalCost = () => {
    const noOfNight = Math.floor(
      (Date.parse(checkOutDate) - Date.parse(checkInDate)) / 86400000
    );
    if (isNaN(noOfNight)) return 0;
    return hotel.pricePerNight * noOfNight;
  };

  const handleReservation = () => {
    if (!guestName || !checkInDate || !checkOutDate) {
      alert("Please fill in all fields");
      return;
    }
    setReservations((prevReservations) => [
      ...prevReservations,
      {
        id: Math.floor(Math.random() * 1000000),
        hotelId: hotel.id,
        hotelName: hotel.name,
        hotelLocation: hotel.location,
        guestName,
        checkInDate: new Date(checkInDate),
        checkOutDate: new Date(checkOutDate),
        noOfNights: Math.floor(
          (Date.parse(checkOutDate) - Date.parse(checkInDate)) / 86400000
        ),
        totalCost: calculateTotalCost(),
      },
    ]);

    onClose();
  };

  return (
    <>
      <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none m-4">
            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
              <h3 className="text-3xl font=semibold">Reservation</h3>
              <button
                className="bg-transparent border-0 text-black float-right"
                onClick={onClose}
              >
                <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full flex justify-center items-center">
                  x
                </span>
              </button>
            </div>
            <div className="relative p-6 flex-auto">
              <HotelDetails hotel={hotel} />

              <div className="mb-4">
                <label
                  htmlFor="guestName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Guest Name
                </label>
                <input
                  type="text"
                  id="guestName"
                  className="mt-1 p-2 border rounded w-full"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="checkInDate"
                  className="block text-sm font-medium text-gray-700"
                >
                  Check-In Date
                </label>
                <input
                  type="date"
                  id="checkInDate"
                  className="mt-1 p-2 border rounded w-full"
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="checkOutDate"
                  className="block text-sm font-medium text-gray-700"
                >
                  Check-Out Date
                </label>
                <input
                  type="date"
                  id="checkOutDate"
                  className="mt-1 p-2 border rounded w-full"
                  value={checkOutDate}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                />
              </div>
              <div className="text-lg font-bold mb-4">
                Total Cost: ${calculateTotalCost()}
              </div>
              <div className="flex justify-end">
                <button
                  className="bg-primary text-white py-2 px-4 rounded mr-2"
                  onClick={handleReservation}
                >
                  Reserve
                </button>
                <button
                  className="bg-gray-300 text-gray-700 py-2 px-4 rounded"
                  onClick={onClose}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReservationModal;
