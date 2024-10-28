'use client'

import { createContext, FC, useState } from 'react';

export interface UserContextValue {
  isOpen: boolean;
  isSuccess: boolean;
  isMenuOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  setSuccess: (isSuccess: boolean) => void;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}

export const LevelContext = createContext<UserContextValue>({ 
  isOpen: false, 
  isSuccess: false, 
  isMenuOpen: false, 
  setIsOpen: () => {},
  setSuccess: () => {},
  setIsMenuOpen: () => {}
});

type Props = {
  children: React.ReactNode;
};


export const LevelProvider: FC<Props> = ({children}) => {
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
    <LevelContext.Provider value={contextValue}>
      {children}
    </LevelContext.Provider>
  );
};