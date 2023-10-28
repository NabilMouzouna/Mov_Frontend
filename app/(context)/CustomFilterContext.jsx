'use client'
import { createContext, useState } from 'react';

export const FilterContext = createContext(null);

const FilterContextProvider = ({ children }) => {
  const [filterBy, setFilter] = useState('All');
  return (
    <FilterContext.Provider value={{ filterBy, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
}

export default FilterContextProvider;
