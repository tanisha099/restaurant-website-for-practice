import { nanoid } from 'nanoid';
import React from 'react';
import { useForm } from 'react-hook-form';

function Create() {
    const {register,handleSubmit} = useForm();
    const SubmitHandler = (data) => {
        data.id = nanoid();
        console.log(data);
    }
  return (
    <form onSubmit={handleSubmit(SubmitHandler)}>
        <input className='block border-b outline-0 p-2' {...register("image")} type="url" />
        <small className='text-red-600'>This is how the error is shown</small>
        <input className='block border-b outline-0 p-2' {...register("title")} type="text" />
        <small className='text-red-600'>This is how the error is shown</small>
    <textarea className='block border-b outline-0 p-2' {...register("description")} placeholder='//start from here'/>
        <small className='text-red-600'>This is how the error is shown</small>
        <textarea className='block border-b outline-0 p-2' {...register("ingredients")} placeholder='//write ingredient seperated by comma'/>
    <select className='block border-b outline-0 p-2' {...register("Catogory")} placeholder='//write instructions seperated by comma'>
    <option value="cat-1">Catgory1</option>
    <option value="cat-2">Catgory2</option>
    <option value="cat-3">Catgory3</option>
    </select>
    <textarea className='block border-b outline-0 p-2' {...register("instruction")} placeholder='//write instructions seperated by comma'/>
        <button>Save Recipe</button>
    </form>
  );
}

export default Create;
