'use client'
import { createContext, useState } from 'react';

export const SortContext = createContext(null);

const SortContextProvider = ({ children }) => {
  const [sortBy, setSortBy] = useState('rating');
  return (
    <SortContext.Provider value={{ sortBy, setSortBy }}>
      {children}
    </SortContext.Provider>
  );
}

export default SortContextProvider;
