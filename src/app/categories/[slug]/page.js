"use client"
import {useEffect } from 'react'
import { useParams } from 'next/navigation';
import {useSelector, useDispatch } from 'react-redux'
import { fetchCategoryPosts } from '../../../../store/slices/category/categoriesAsync'
const page = () => {
  const slug = useParams();
  
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
    <div>
      {
        posts.length > 0 && (
          posts.map((post) => (
            <div>
              <h2>{post.slug}</h2>
            </div>
            
          ))
        )
        
      }
      <main >
       
        
      </main>
       </div>
  )
}

export default page