import React, { createContext, useState } from 'react';

// ✅ Context object (PascalCase)
export const RecipeContext = createContext(null);


// ✅ Provider component (also PascalCase)
export const RecipeProvider = ({ children }) => {
  const [data, setData] = useState([]);

  return (
    <RecipeContext.Provider value={{ data, setData }}>
      {children}
    </RecipeContext.Provider>
  );
};
