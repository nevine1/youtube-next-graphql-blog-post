
"use client"
import { useEffect, useState} from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { addCategory } from '../../store/slices/category/categoriesAsync'
import { createCategoryQuery } from '../utils/mutations'

const AddCategoryForm = () => {

  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');
  const [postSlug, setPostSlug] = useState('');
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  

 /*  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (name == '' || slug == '') {
      setError("All fields are required.");
      return;
    }

    setError('');
    setSuccessMsg('');
    
    dispatch(addCategory({ name, slug }))
      .then(() => {
        setSuccessMsg('New category added successfully.');
        setName('');
        setSlug('');
      })
      .catch((err) => {
        setError(err.message || 'Failed to add category.');
      });
  }; */


  const handleSubmit = async () => {
    

    if (!name || !slug ) {
      setError('All fields are required');
      return;
    }

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_BLOG_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: createCategoryQuery,
          variables: {
            name,
            slug
          },
        }),
      });

      const data = await response.json();

      if (data.errors) {
        const errorMessage = data.errors[0].message;
        if (errorMessage.includes('value is not unique for the field "email"')) {
          throw new Error('This email has already been used to submit a comment.');
        }
        throw new Error(errorMessage);
      }

      

      setSuccessMsg('New category added successfully.');
        setName('');
        setSlug('');

      /* etTimeout(() => setShowSuccessMessage(false), 3000); */
      setError('');
    } catch (error) {
      console.error('Error submitting comment:', error);
      setError(error.message || 'Failed to submit comment');
    }
  };



  return (
    <div className="bg-white m-4 rounded-lg p-6 shadow-md pb-8">
      <h2 className="text-lg font-semibold pb-4 border-b">Add New Category</h2>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 mb-4 lg:grid-cols-2 gap-4">
          <input
            value={name}
            type="text"
            placeholder="Name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            className="p-2 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
            required
          />
        </div>

        <div className="grid grid-cols-1 mb-4 lg:grid-cols-2 gap-4">
          <input
            value={slug}
            type="text"
            placeholder="Slug"
            name="slug"
            onChange={(e) => setSlug(e.target.value)}
            className="p-2 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
            required
          />
        </div>

        {error && <p className="text-xs text-red-400">{error}</p>}
       
        {successMsg && <p className="text-xs text-green-400">{successMsg}</p>}

        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="text-lg text-white bg-pink-500 cursor-pointer transition duration-500 ease hover:-translate-y-3 px-8 py-3 my-10 rounded-full"
           
          >
            Add Category
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCategoryForm;
