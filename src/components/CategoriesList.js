"use client"
import {useState, useEffect} from 'react'
import { fetchCategories} from '../../store/slices/category/categoriesAsync'
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link'
import { IoConstructOutline } from 'react-icons/io5';
const CategoriesList = () => {
  const dispatch = useDispatch(); 
  const { categories, isLoading, error  } = useSelector((state) =>state.categories)
  
  useEffect(() =>{
    dispatch(fetchCategories());
  }, [dispatch])

  useEffect(() =>{
    console.log(categories)
  }, [categories])
 
 /*  useEffect(() => {
    const storedCategories = localStorage.getItem('categories');
    if (storedCategories) {
        dispatch(setCategories(JSON.parse(storedCategories)));
    } else {
        dispatch(fetchCategories());
    }
}, [dispatch]); */
  useEffect(() => {
    if (categories.length > 0) {
        localStorage.setItem('categories', JSON.stringify(categories));
    }
}, [categories]);

console.log('localStorage')
console.log(localStorage)
  return (
    <div className="bg-white rounded-lg mb-8 p-5">
      
      <div className="bg-white  rounded-lg p-8 mb-8">
      <h2 className="font-semibold border-b text-xl mb-8">Categories List</h2>
        <div className="flex flex-col w-full mb-4">

          { isLoading && (
          
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