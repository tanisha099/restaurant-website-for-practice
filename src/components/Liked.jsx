import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';

function Liked() {
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    const storedFav = JSON.parse(localStorage.getItem("fav") || "[]");
    setFavorite(storedFav);
  }, []);

  const clearAll = () => {
    localStorage.removeItem("fav");
    setFavorite([]);
  };

  const renderRecipes = favorite.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Liked Recipes</h2>
        {favorite.length > 0 && (
          <button
            onClick={clearAll}
            className="bg-red-400 text-white px-4 py-1 rounded hover:bg-red-600"
          >
            Clear All
          </button>
        )}
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {favorite.length > 0 ? renderRecipes : <p>No liked recipes found!</p>}
      </div>
    </div>
  );
}

export default Liked;
