"use client"
import {useState, useEffect} from 'react'
import  Link  from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import {fetchCategories} from '../../store/slices/category/categoriesAsync'
const Header = () => {
  const dispatch = useDispatch();
  const {categories, isLoading, error} = useSelector((state) => state.categories );

  useEffect(() =>{
    dispatch(fetchCategories());
  }, [dispatch])

 /*  useEffect(() =>{
    console.log(categories)
  }, [categories]) */
  
  return (
    <div className="container mx-auto px-10 mb-4">
      <div className="border-b w-full inline-block border-blue-450 py-10">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer text-4xl ">
              GraphCMS
            </span>
          </Link>
        </div>
        <div className="md:float-left md:contents px-10">
      
          <Link href={`/posts`}>
            <span className="text-semibold md:float-right mt-2 align-middle mr-4 cursor-pointer">
              Posts
            </span>
          </Link>
          <Link href={`/categories`}>
            <span className="text-semibold md:float-right mt-2 align-middle mr-4 cursor-pointer">
              Categories
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
