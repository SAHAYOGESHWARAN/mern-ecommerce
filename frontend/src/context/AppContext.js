
import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  return (
    <AppContext.Provider value={{ basket, setBasket }}>
      {children}
    </AppContext.Provider>
  );
};
