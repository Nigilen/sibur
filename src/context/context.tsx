'use client'

import { createContext, FC, useState } from 'react';

export interface ContextValues {
  isOpen: boolean;
  isSuccess: boolean;
  isMenuOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  setSuccess: (isSuccess: boolean) => void;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}

export const MainContext = createContext<ContextValues>({ 
  isOpen: false, 
  isSuccess: false, 
  isMenuOpen: false, 
  setIsOpen: () => {},
  setSuccess: () => {},
  setIsMenuOpen: () => {}
});

interface Props {
  children: React.ReactNode;
};


export const MainProvider: FC<Props> = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const contextValue = { 
    isOpen, 
    setIsOpen, 
    isSuccess, 
    setSuccess,
    isMenuOpen, 
    setIsMenuOpen
  };

  return (
    <MainContext.Provider value={contextValue}>
      {children}
    </MainContext.Provider>
  );
};