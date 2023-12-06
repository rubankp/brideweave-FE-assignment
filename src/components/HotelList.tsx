import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/Appcontext";
import DropdownField from "./DropdownField";
import { Hotel } from "../models/hotel";
import HotelCard from "./HotelCard";
import ReservationModal from "./ReservationModal";

interface HotelListProps {
  hotels: Hotel[];
}

const HotelList: React.FC<HotelListProps> = ({ hotels }) => {
  const { reservations, setReservations } = useAppContext();
  const [reservationModalOpen, setReservationModalOpen] = useState(false);
  const [selectedHotelForReservation, setSelectedHotelForReservation] =
    useState<Hotel | null>(null);

  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const locationFilter = queryParams.get("location") || "";
  const priceRangeFilter = queryParams.get("priceRange") || "";

  const [filteredHotels, setFilteredHotels] = useState<Hotel[]>(hotels);
  const [locationInput, setLocationInput] = useState<string>(locationFilter);
  const [priceRangeInput, setPriceRangeInput] =
    useState<string>(priceRangeFilter);

  const handleReservationClick = (hotel: Hotel) => {
    setReservationModalOpen(true);
    setSelectedHotelForReservation(hotel);
  };
  useEffect(() => {
    const updatedHotels = hotels.filter((hotel) => {
      const matchesLocation = hotel.location
        .toLowerCase()
        .includes(locationInput.toLowerCase());
      const matchesPriceRange =
        priceRangeInput === "" ||
        hotel.pricePerNight <= parseInt(priceRangeInput, 10);
      return matchesLocation && matchesPriceRange;
    });

    const newSearchParams = new URLSearchParams();
    if (locationInput) newSearchParams.set("location", locationInput);
    if (priceRangeInput) newSearchParams.set("priceRange", priceRangeInput);
    navigate(`?${newSearchParams.toString()}`, { replace: true });

    setFilteredHotels(updatedHotels);
  }, [hotels, locationInput, priceRangeInput, navigate]);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold">Hotel List</h2>
        <Link
          to="/reservation"
          className="block bg-secondary text-white py-2 px-4 rounded"
        >
          Reservations
        </Link>
      </div>
      <div className="flex justify-between items-center mb-4 gap-4">
        <DropdownField
          label="Location"
          options={["City A", "City B", "City C"]}
          value={locationInput}
          onChange={(value) => setLocationInput(value)}
        />
        <DropdownField
          label="Max Price Per Night"
          options={["", "100", "200", "300"]}
          value={priceRangeInput}
          onChange={(value) => setPriceRangeInput(value)}
        />
      </div>
      {filteredHotels.map((hotel) => (
        <HotelCard
          key={hotel.id}
          hotel={hotel}
          handleReservationClick={handleReservationClick}
        />
      ))}

      {reservationModalOpen && (
        <ReservationModal
          hotel={selectedHotelForReservation!}
          isOpen={reservationModalOpen}
          setReservations={setReservations}
          onClose={() => {
            setReservationModalOpen(false);
            setSelectedHotelForReservation(null);
          }}
        />
      )}
    </div>
  );
};

export default HotelList;
