'use client'
import { createContext, useState } from 'react';

export const MenuContext = createContext(null);

const MenuContextProvider = ({ children }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <MenuContext.Provider value={{ isOpened, setIsOpened }}>
      {children}
    </MenuContext.Provider>
  );
}

export default MenuContextProvider;
