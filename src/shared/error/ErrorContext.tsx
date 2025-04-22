import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { ErrorDialog } from './ErrorDialog';

type ErrorContextType = {
  showError: (message: string) => void;
};

const ErrorContext = createContext<ErrorContextType | undefined>(undefined);

export const useError = () => {
  const context = useContext(ErrorContext);
  if (!context) throw new Error('useError must be used within ErrorProvider');
  return context;
};

export const ErrorProvider = ({ children }: { children: ReactNode }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const showError = useCallback((message: string) => {
    setErrorMessage(message);
    setIsOpen(true);
  }, []);

  const close = () => setIsOpen(false);

  return (
    <ErrorContext.Provider value={{ showError }}>
      {children}
      <ErrorDialog open={isOpen} onClose={close} message={errorMessage} />
    </ErrorContext.Provider>
  );
};
