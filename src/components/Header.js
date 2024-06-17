"use client"
import {useState, useEffect} from 'react'
import  Link  from 'next/link'
import { getCategories } from '../utils/queries'

const Header = () => {
  const [categories, setCategories] = useState([]);
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
     console.log(data)
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
  console.log(categories)
  return (
    <div className="container mx-auto px-10 mb-10">
      <div className="border-b w-full inline-block border-blue-450 py-10">
      <h2>header</h2>
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer text-4xl ">
              GraphCMS
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {
            categories.map((category , index)=>(
              <Link key={category.index} href={`/categories/${category.slug}`}>
                <span className="text-semibold md:float-right mt-2 align-middle mr-4 cursor-pointer">{category.name}</span>
              </Link>
            ))
          }
          
        </div>
      </div>
    </div>
  )
}

export default Header
