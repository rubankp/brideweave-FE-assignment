import React, { createContext, useContext, useState } from "react";
import { Reservation } from "../models/reservation";

interface AppContextProps {
  reservations: Reservation[];
  setReservations: React.Dispatch<React.SetStateAction<Reservation[]>>;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [reservations, setReservations] = useState<Reservation[]>([]);

  return (
    <AppContext.Provider value={{ reservations, setReservations }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
