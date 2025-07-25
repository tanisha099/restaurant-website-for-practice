import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
  const { id, image, title, description, Catogory } = recipe;

  return (
    <Link
      to={`/recipes/details/${id}`}
      className="m-10 group block w-full sm:w-[48%] md:w-[30%] lg:w-[23%] rounded-xl overflow-hidden shadow-md bg-white hover:shadow-xl transition-all duration-300"
    >
      <div className="overflow-hidden h-[180px]">
        <img
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
          src={image}
          alt={title}
        />
      </div>

      <div className="p-4">
        <h1 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h1>

        <small className="text-sm text-rose-400 block mb-2">{Catogory}</small>

        <p className="text-gray-600 text-sm">
          {description.slice(0, 100)}...
          <small className="text-blue-500 ml-1 group-hover:underline">more</small>
        </p>
      </div>
    </Link>
  );
}

export default RecipeCard;
