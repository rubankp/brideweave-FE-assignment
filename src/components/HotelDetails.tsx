import React from "react";

interface HotelDetailsProps {
  hotel: { id: number; name: string; location: string; pricePerNight: number };
}

const HotelDetails: React.FC<HotelDetailsProps> = ({ hotel }) => (
  <div>
    <h3 className="text-xl font-bold mb-2">{hotel.name}</h3>
    <p className="text-gray-600 mb-2">{hotel.location}</p>
    <p className="text-lg font-bold">${hotel.pricePerNight} per night</p>
  </div>
);

export default HotelDetails;
