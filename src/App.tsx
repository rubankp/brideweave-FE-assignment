import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppProvider } from "./context/Appcontext";
import HotelList from "./components/HotelList";
import ReservationDetails from "./components/ReservationDetails";

const App: React.FC = () => {
  return (
    <Router>
      <AppProvider>
        <Routes>
          <Route path="/" element={<HotelList hotels={dummyHotelData} />} />
          <Route path="/reservation" element={<ReservationDetails />} />
        </Routes>
      </AppProvider>
    </Router>
  );
};

export default App;

export const dummyHotelData = [
  {
    id: 1,
    name: "Hotel A",
    location: "City A",
    pricePerNight: 150,
  },
  {
    id: 2,
    name: "Hotel B",
    location: "City B",
    pricePerNight: 120,
  },
  {
    id: 3,
    name: "Hotel C",
    location: "City C",
    pricePerNight: 180,
  },
  {
    id: 4,
    name: "Hotel D",
    location: "City A",
    pricePerNight: 200,
  },
  {
    id: 5,
    name: "Hotel E",
    location: "City C",
    pricePerNight: 130,
  },
];
