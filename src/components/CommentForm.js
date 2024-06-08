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
      <div className="grid grid-cols-1 gap-4 mb-4 lg:grid-cols-2 gap-4">
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
      <div className="grid grid-cols-1 gap-4 mb-4">
          
      </div>

    </div>
  )
}

export default CommentForm