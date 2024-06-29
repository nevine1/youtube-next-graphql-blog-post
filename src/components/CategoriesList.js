"use client"
import {useState, useEffect} from 'react'
import { fetchCategories} from '../../store/slices/category/categoriesAsync'
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link'
const CategoriesList = () => {
  const dispatch = useDispatch(); 
  const { categories, isLoading, error  } = useSelector((state) =>state.categories)
  
  useEffect(() =>{
    dispatch(fetchCategories());
  }, [dispatch])

  useEffect(() =>{
    console.log(categories)
  }, [categories])
  console.log(categories)

  
  console.log(categories)
  return (
    <div className="bg-white rounded-lg mb-8 p-5">
      {/* <h2 className="font-semibold border-b text-xl mb-8">Categories List</h2>
      
      {isLoading && (
        
        categories.map((category) =>(
          <div key={category.id}
            className="rounded-md p-4 "
            >
            <Link href={`/categories/${category.slug}`}>
              {category.name} 
            </Link>
          </div>
        ))
        )}  */}
      
      <div className="bg-white  rounded-lg p-8 mb-8">
      <h2 className="font-semibold border-b text-xl mb-8">Categories List</h2>
        <div className="flex flex-col w-full mb-4">

          {isLoading && (
          
          categories.map((category) =>(
            <div key={category.id}
              className="rounded-md p-4 shadow-lg mb-3 border-solid border-1 border-gray-600"
              >
              <Link href={`/categories/${category.slug}`}>
                {category.name} 
              </Link>
            </div>
          ))
          )} 
          {/* <div className="flex-none w-16">
            <Link href={`/posts/${post.slug}`} className="cursor-pointer">
              <img height="60" width="60" alt={post.title}
                  src={post.featuredImage.url}
                  className="rounded-full align-middle"
                  />
            </Link>
          </div> */}
        </div>
      </div>


    </div>
  )
}

export default CategoriesList