import React, { useContext, useEffect, useState} from 'react';
import { RecipeContext } from '../context/RecipeContext';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { FaHeart, FaRegHeart } from "react-icons/fa";

function SingleRecipe() {
  const navigate = useNavigate()
    const { data, setData } = useContext(RecipeContext);
  const { register, handleSubmit, reset } = useForm();
  const SubmitHandler = (recipe) => {
   const index = data.findIndex((recipe)=> params.id === recipe.id)
  const copydata = [...data];
  copydata[index]={...copydata[index],...recipe};
   setData(copydata);
   localStorage.setItem("recipes",JSON.stringify(copydata));
  };
  const params = useParams();
  const recipe = data.find((recipe)=> params.id === recipe.id);
  const DeleteHandler =() =>{
    const filterdata = data.filter((r)=> r.id != params.id);
     setData(filterdata);
     localStorage.setItem("recipes",JSON.stringify(filterdata));
     navigate("/recipes")
  }
  const [Favorite, setFavorite] = useState(
    JSON.parse(localStorage.getItem("fav")) || []
  )
  const unfavHandler = () => {
  const filterfav = Favorite.filter((f) => f.id !== recipe?.id);
  setFavorite(filterfav);
  localStorage.setItem("fav", JSON.stringify(filterfav));
};

const favHandler = () => {
  const alreadyFav = Favorite.find((f) => f.id === recipe?.id);
  if (!alreadyFav) {
    const updatedFav = [...Favorite, recipe];
    setFavorite(updatedFav);
    localStorage.setItem("fav", JSON.stringify(updatedFav));
  }
};
  useEffect(()=>{
    console.log("SingleRecipe.jsx Mounted");
    return () => {
      console.log("SingleRecipe.jsx Unmount");
    }
  }, [Favorite]);
  
 return recipe ? (
  <div>
      <div>
        {Favorite.find((f) => f.id == recipe?.id) ?(
            <FaHeart onClick={unfavHandler} className="text-red-500 text-2xl absolute left-[45%] bottom-[17%]" /> // ❤️ Liked
        )
       
        :(
          <FaRegHeart onClick={favHandler} className="text-black text-2xl absolute left-[45%] bottom-[17%]" /> // 🤍 Not liked }
         
        )}  
      </div>
   <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        {recipe.title}
      </h1>

      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Image */}
        {recipe.image ? (
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full md:w-1/2 rounded-lg shadow-md object-cover"
          />
        ) : (
          <div className="w-full md:w-1/2 h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
            No Image Available
          </div>
        )}

        {/* Details */}
        <div className="w-full md:w-1/2">
          <h2 className="text-xl font-semibold mb-3 text-gray-700">
            Description
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {recipe.description || 'No description provided.'}
          </p>
        </div>
      </div>
    </div>
     <form
        onSubmit={handleSubmit(SubmitHandler)}
        className=" text-black grid gap-4 sm:grid-cols-2 grid-cols-1"
      >
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-black">Image URL</label>
          <input
            {...register('image')}
            defaultValue={recipe.image}
            type="url"
            className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            {...register('title')}
            defaultValue={recipe.title}
            type="text"
            className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Delicious Pasta"
          />
        </div>

        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            {...register('description')}
            defaultValue={recipe.description}
            className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Start from here..."
            rows={3}
          />
        </div>

        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Ingredients</label>
          <textarea
            {...register('ingredients')}
            defaultValue={recipe.ingredients}
            className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="e.g., Onion, Tomato, Pasta..."
            rows={2}
          />
        </div>

        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <select
            {...register('Catogory')}
            defaultValue={recipe.category}
            className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Category</option>
            <option value="cat-1">Category 1</option>
            <option value="cat-2">Category 2</option>
            <option value="cat-3">Category 3</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Instructions</label>
          <textarea
            {...register('instruction')}
            className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Step-by-step instructions..."
            rows={3}
          />
        </div>

        <div className="sm:col-span-2 text-center">
          <button
            className="bg-green-300 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Update
          </button>
           <button onClick={DeleteHandler}
            className="bg-red-400 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Delete
          </button>
        </div>
      </form>
  </div>
 
 ) : "Loading...";
}

export default SingleRecipe;

