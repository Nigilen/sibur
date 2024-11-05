'use client'

import { createContext, FC, useContext } from "react";
import { MainContext } from "./context";

export interface Values {
  isOpen: boolean;
  isSuccess: boolean;
  isMenuOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  setSuccess: (isSuccess: boolean) => void;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}

export const DataContext = createContext<Values>({
  isOpen: false, 
  isSuccess: false, 
  isMenuOpen: false, 
  setIsOpen: () => {},
  setSuccess: () => {},
  setIsMenuOpen: () => {}
});

type DataProviderProps = {
  children: React.ReactNode;
};

export const DataProvider: FC<DataProviderProps> = ({ children }) => {
  const mainContext = useContext(MainContext);

  return (
    <DataContext.Provider value={mainContext}>
      {children}
    </DataContext.Provider>
  );
};