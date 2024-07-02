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
     
      <div className="container mx-auto  mb-2 ">
        <h1>posts list related to {slug} Category</h1>
      {isLoading && <p>Loading posts...</p>} {/* Display loading state */}
      {error && <p className="error">Error: {error}</p>} {/* Display error message */}
      {posts.length > 0 && ( // Render posts only if fetched successfully
        <div className="flex items-center">
          
          <div className="grid grid-cols-2  lg:grid-cols-4 gap-12" >
          {
                posts.map((post) =>(
                  <div key={post.id}>
                      <CategoryPostCard post={post}  slug={slug}/>
                  </div>
                  
                ))
              }
          </div>
        
        </div>
      )}
    </div>
    )
  }

export default page