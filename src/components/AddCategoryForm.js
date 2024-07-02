
"use client"
import { useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import { addCategory } from '../../store/slices/category/categoriesAsync'
import { createCategoryQuery } from '../utils/mutations';


const AddCategoryForm = () => {
  const dispatch = useDispatch();
  const [name, setName ] = useState('');
  const [slug, setSlug ] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(e.target.value);
    if(name == " " || slug == " ") {
      return <p>Name and slug field Can not be empty </p>
    }else{
      dispatch(addNewCategory(name, slug));
      setName(' ');
      setSlug(' ');
    }
  }
  return (
    <div className="bg-white m-4 rounded-lg p-6 shadow-md pb-8">
      <h2 className="text-lg font-semibold pb-4 border-b">Add New Category</h2>

      <div className="grid grid-cols-1 mb-4 lg:grid-cols-2 gap-4">
        <input
          value={name}
          type="text"
          placeholder="Name"
          name="name"
          required
          onChange={(e) =>setName(e.target.value)}
          className="p-2 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
        />
        
      </div>
      
      <div className="grid grid-cols-1 mb-4 lg:grid-cols-2 gap-4">
        <input
          value={slug}
          type="text"
          placeholder="slug"
          name="slug"
          required
          onChange={(e) =>setSlug(e.target.value)}
          className="p-2 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
        />
        
      </div>

      {/* {error && <p className="text-xs text-red-400">{error}</p>} */}
      <div className="flex justify-center mt-4">
        <button
          type="button"
          onClick={handleSubmit}
          className="text-lg text-white bg-pink-500 cursor-pointer transition duration-500 ease hover:-translate-y-3 px-8 py-3 my-10 rounded-full"
        >
          Submit Comment
        </button>
       {/*  {showSuccessMessage && (
          <span className="text-sm text-green-600 mt-3">
            Comment successfully submitted for review
          </span>
        )} */}
      </div>
    </div>
  );
};

export default AddCategoryForm;

