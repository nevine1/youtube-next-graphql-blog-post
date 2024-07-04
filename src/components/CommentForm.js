"use client"
import { useEffect, useState} from 'react'
import { createCommentQuery } from '../utils/mutations';

const CommentForm = ({ slug, postSlug }) => {
  const [formData, setFormData] = useState({ name: '', email: '', comment: '' });
  const [isChecked, setIsChecked] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('formData'));
    if (storedData) {
      setFormData(storedData);
      setIsChecked(true);
    }
  }, []);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    if (!event.target.checked) {
      localStorage.removeItem('formData');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    const { name, email, comment } = formData;

    if (!name || !email || !comment) {
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
          query: createCommentQuery,
          variables: {
            name,
            email,
            comment,
            slug,
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

      if (isChecked) {
        localStorage.setItem('formData', JSON.stringify({ name, email }));
      }

      setShowSuccessMessage(true);
      setFormData({ name: '', email: '', comment: '' });

      setTimeout(() => setShowSuccessMessage(false), 3000);
      setError('');
    } catch (error) {
      console.error('Error submitting comment:', error);
      setError(error.message || 'Failed to submit comment');
    }
  };

  return (
    <div className="bg-white m-4 rounded-lg p-6 shadow-md pb-8">
      <h2 className="text-lg font-semibold pb-4 border-b">Add a comment for this post:</h2>

      <div className="grid grid-cols-1 mb-4 lg:grid-cols-2 gap-4">
        <input
          value={formData.name}
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleChange}
          className="p-2 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
        />
        <input
          value={formData.email}
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          className="p-2 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          value={formData.comment}
          className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Comments"
          name="comment"
          onChange={handleChange}
        />
      </div>
      <div className="grid grid-cols-1 mb-4 gap-4">
        <div>
          <input
            name="storeData"
            type="checkbox"
            id="storeData"
            value="true"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label className="text-gray-500 cursor-pointer ml-2" htmlFor="storeData">
            Save my name and email for next time I add a comment
          </label>
        </div>
      </div>
      {error && <p className="text-xs text-red-400">{error}</p>}
      <div className="flex justify-center mt-4">
        <button
          type="button"
          onClick={handleSubmit}
          className="text-lg text-white bg-pink-500 cursor-pointer transition duration-500 ease hover:-translate-y-3 px-8 py-3 my-10 rounded-full"
        >
          Submit Comment
        </button>
        {showSuccessMessage && (
          <span className="text-sm text-green-600 mt-3">
            Comment successfully submitted for review
          </span>
        )}
      </div>
    </div>
  );
};

export default CommentForm;
