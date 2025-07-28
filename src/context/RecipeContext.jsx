import React, { createContext, useEffect, useState } from 'react';

export const RecipeContext = createContext(null);

export const RecipeProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("recipes")) || []);
  },[]); 

  return (
    <RecipeContext.Provider value={{ data, setData }}>
      {children}
    </RecipeContext.Provider>
  );
};
