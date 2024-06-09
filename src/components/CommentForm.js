import { comment } from 'postcss';
import {useState, useEffect, useRef} from 'react'

const CommentForm = () => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  const handleSubmit = () =>{
   setError(false);

   const { value: comment } = commentEl.current;
   const { value: name } = nameEl.current;
   const { value: email } = emailEl.current;
   const { checked: storeData } = storeDataEl.current;

   if(!comment || !name || !email ){
    setError('These fields are required')
    return ; // to stop submission 
   }

   const commentSub = { comment, name, email, slug};

   //if you need to store the name and email 
   if(storeData){
    localStorage.setItem('name', name);//if y like to store data, save name and email
    localStorage.setItem('email', email);
   }else{
    localStorage.removeItem('name', name);
    localStorage.removeItem('email', email);
   }
  }
  return (
    <div className="bg-white m-4 rounded-lg p-6 shadow-md pb-8">
      <h2 className="text-lg font-semibold pb-4 border-b">Comments</h2>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea ref={comment} 
          className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
             placeholder="comments"
             name="comment"
          />
          
      </div>
      <div className="grid grid-cols-1 mb-4 lg:grid-cols-2 gap-4">
          <input ref={nameEl}
            type="text"
            placeholder='Name'
            name="nameEl"
            className="p-2 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          />
          <input ref={nameEl}
            type="email"
            placeholder='Email'
            name="emailEl"
            className="p-2 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          />
      </div>
      <div className="grid grid-cols-1 mb-4 gap-4">
        <div>
          <input ref={storeDataEl} 
            name="storeData"
            type="checkbox"
            id="storeData"
            value="true"
          />
          <label className="text-gray-500 cursor-pointer ml-2" 
            htmlFor="storeData">
            Save my name and email for next time I add comment
          </label>
        </div>
      </div>
      {error && <p className="text-xs text-red-400">All fields are required</p>}
      <div className="flex justify-center mt-4">
          <button type="button"
            onClick={handleSubmit}
            className="text-lg text-white bg-pink-500 cursor-pointer
            transition duration-500 ease hover:-translate-y-3
            px-8 py-3 my-10 rounded-full"> 
            Submit Comment
          </button>
          {
            showSuccessMessage && (
              <span className="text-sm text-green-600 mt-3">
                Comment successfully submitted for review
              </span>
            )
          }
      </div>

    </div>
  )
}

export default CommentForm