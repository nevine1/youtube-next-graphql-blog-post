import { comment } from 'postcss';
import {useState, useEffect, useRef} from 'react'
import { submitComment } from '../services/postsAsync'
const CommentForm = () => {
  const [error, setError] = useState(false);
  const[isLoading, setIsLoading ] = useState(false)
  const [localStorage, setLocalStorage] = useState(null)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: '', email: '', comment: ''
  })

 
 const handleChange = (event) => {
  setFormData({ ...formData, [event.target.name]: event.target.value });
};


  /* useEffect(() =>{
    nameEl.current.value = window.localStorage.getItem('name');
    emailEl.current.value = window.localStorage.getItem('email');
  }, []) */
  const handleSubmit2 = () =>{
   setError(false);

   const { value: comment } = commentEl.current;
   const { value: name } = nameEl.current;
   const { value: email } = emailEl.current;
   const { checked: storeData } = storeDataEl.current;

  

   const commentObj = { comment, name, email, slug};

  
   if(storeData){
    
    window.localStorage.setItem('name', name);//if y like to store data, save name and email
    window.localStorage.setItem('email', email);
   }else{
    window.localStorage.removeItem('name', name);
    window.localStorage.removeItem('email', email);
   }

   submitComment(commentObj).
   then((req) =>{
    setShowSuccessMessage(true);
    setTimeout(() =>{
      setShowSuccessMessage(fa);
    }, 3000)
   })
  }

  const handleSubmit = ()=>{
    event.preventDefault();
    setIsLoading(true);
    setSubmissionStatus(null); // Clear previous status

    if(!comment || !name || !email ){
      setError('These fields are required')
      return ; // to stop submission 
     }

     const commentObj = { comment, name, email, slug};

     submitComment(commentObj).
   then((req) =>{
    setShowSuccessMessage(true);
    setTimeout(() =>{
      setShowSuccessMessage(fa);
    }, 3000)
   })

  }
  return (
    <div className="bg-white m-4 rounded-lg p-6 shadow-md pb-8">
      <h2 className="text-lg font-semibold pb-4 border-b">Comments</h2>
      <div className="grid grid-cols-1 gap-4 mb-4">

        <textarea value={formData.comment}
          className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
             placeholder="comments"
             name="comment"
             onChange={handleChange}
          />
          
      </div>
      <div className="grid grid-cols-1 mb-4 lg:grid-cols-2 gap-4">
          <input value={formData.name}
            type="text"
            placeholder='Name'
            name="name"
            onChange={handleChange}
            className="p-2 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          />
          <input value={formData.email}
            type="email"
            placeholder='Email'
            name="email"
            onChange={handleChange}
            className="p-2 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          />
      </div>
     {/*  <div className="grid grid-cols-1 mb-4 gap-4">
        <div>
          <input 
            name="storeData"
            type="checkbox"
            id="storeData"
            value="true"
            onChange={}
          />
          <label className="text-gray-500 cursor-pointer ml-2" 
            htmlFor="storeData">
            Save my name and email for next time I add comment
          </label>
        </div>
      </div> */}
      {/* {error && <p className="text-xs text-red-400">All fields are required</p>} */}
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