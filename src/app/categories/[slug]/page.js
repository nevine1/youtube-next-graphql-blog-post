"use client"
import {useEffect } from 'react'
import { useParams } from 'next/navigation';
import {useSelector, useDispatch } from 'react-redux'
import { fetchCategoryPosts } from '../../../../store/slices/category/categoriesAsync'
import { CategoryPostCard, PostWidget } from '../../../components/page'
const page = () => {
    const { slug } = useParams();//this is the category slug not post slug
    const dispatch = useDispatch();
    const { posts, isLoading, error } = useSelector((state) =>state.posts)
  
    useEffect(() =>{
  
      if(slug){
        dispatch(fetchCategoryPosts(slug))
      }
      
    }, [dispatch, slug])
      
   console.log(posts)
    
   if(isLoading){
    return <h2>posts are loading...............</h2>
   }
    return (
     
      <div className="container mx-auto px-12 mb-8">
        <h1>posts list related to {slug} Category</h1>
      {isLoading && <p>Loading posts...</p>} {/* Display loading state */}
      {error && <p className="error">Error: {error}</p>} {/* Display error message */}
      {posts.length > 0 && ( // Render posts only if fetched successfully
        <div className="p-10">
          <div> </div>
          <div className="grid grid-cols-4 md:grid-cols-3 sm:grid-cols-6 gap-12" >
          {/* <div className="lg:col-span-8 col-span-1 rounded" > */}
          {
                posts.map((post, index) =>(
                  <CategoryPostCard post={post} key={index} slug={slug}/>
                ))
              }
          </div>
        
        </div>
      )}
    </div>
    )
  }

export default page