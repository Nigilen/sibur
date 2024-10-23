'use client'

import { createContext, FC, useState } from 'react';

export interface UserContextValue {
  login: string | undefined;
  currency: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isSuccess: boolean;
  setSuccess: (isSuccess: boolean) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}

export const LevelContext = createContext<UserContextValue>({ 
  login: undefined, 
  currency: 'rub', 
  isOpen: false, 
  setIsOpen: () => {},
  isSuccess: false, 
  setSuccess: () => {},
  isMenuOpen: false, 
  setIsMenuOpen: () => {}
});

type Props = {
  children: React.ReactNode;
};

const userValue = { 
  login: 'vasiliy', 
  currency: '$'
}

export const LevelProvider: FC<Props> = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const contextValue = { 
    ...userValue, 
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