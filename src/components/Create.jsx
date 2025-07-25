import { nanoid } from 'nanoid';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { RecipeContext } from '../context/RecipeContext';
import { useNavigate } from 'react-router-dom';
function Create() {
  const { data, setData } = useContext(RecipeContext);
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const SubmitHandler = (recipe) => {
    recipe.id = nanoid();
    console.log(recipe)
    setData([...data, recipe]);
    reset();
    navigate("/recipes")
  };

  return (
    <section  className=" h-screen   max-w-2xl mx-auto p-6  rounded-xl shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Create New Recipe</h2>

      <form
        onSubmit={handleSubmit(SubmitHandler)}
        className=" text-black grid gap-4 sm:grid-cols-2 grid-cols-1"
      >
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-black">Image URL</label>
          <input
            {...register('image')}
            type="url"
            className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            {...register('title')}
            type="text"
            className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Delicious Pasta"
          />
        </div>

        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            {...register('description')}
            className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Start from here..."
            rows={3}
          />
        </div>

        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Ingredients</label>
          <textarea
            {...register('ingredients')}
            className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="e.g., Onion, Tomato, Pasta..."
            rows={2}
          />
        </div>

        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <select
            {...register('Catogory')}
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
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Save Recipe
          </button>
        </div>
      </form>
    </section>
  );
}

export default Create;
