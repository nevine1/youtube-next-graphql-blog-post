/* import {useState, useEffect} from 'react'
import { getCategories } from '@/utils/queries' */
import { getAllCategories } from '../components/GetPostsCategories';
const graphAPI = process.env.NEXT_PUBLIC_BLOG_ENDPOINT;
const Categories = () => {
  /* const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getAllCategories = async () =>{

    setIsLoading(true); //

    try{

      const options = {
        method: 'POST', 
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify({
          query: getCategories
        })
      };
  
      const response = await fetch(graphAPI, options);
      const data = await response.json();
     
      if (data.errors) {
        setError(data.errors[0].message);
      } else {
        setCategories(data.data.categories);
      }
    } catch (err) {
      setError('An error occurred while fetching categories');
    } finally {
      setIsLoading(false);
    }
    
  }

  useEffect(() =>{
    getAllCategories();
  }, []) 
   */
  console.log(categories)
  return (
    <div className="bg-white rounded-lg mb-8 p-5">
      <h2 className="font-semibold border-b text-xl mb-3">Categories</h2>
      {isLoading ? (
        <p>Loading categories ...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        // Conditional rendering within useEffect to ensure fetched data
        categories.map((category) =>(
          <div key={category.id}
            className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-3 mb-3">
            <h1 className="transition duration-700  mb-2 cursor-pointer hover:text-pink-600 text-[20px] ">
              {category.name}
            </h1>
          </div>
          

        ))
      )} 

    </div>
  )
}

export default Categories