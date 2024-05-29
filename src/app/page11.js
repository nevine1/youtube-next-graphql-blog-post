"use client"
import Image from "next/image";
import { useState, useEffect } from 'react'
import { Categories, PostCard, PostWidget} from '../components/page'
import { getPostsQuery } from '../utils/queries'

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [posts, setPosts ] = useState([])
console.log(posts)
  const getAllPosts = async () =>{
    setIsLoading(true)
      try{
          const requestBody = {
            query: getPostsQuery 
          };
          const options = {
            method: 'POST',
            headers:{'content-type': 'application/json'},
            body: JSON.stringify(requestBody)
          };

          const response =await fetch(process.env.NEXT_PUBLIC_BLOG_ENDPOINT, options);
          console.log('response status:', response.status);
          const data = await response.json();

          if (data?.errors) {
            setError(data.errors[0].message);
          } else {
            setPosts(data.postsConnection.edges.node)
          }

     


      }catch(err){
          setError('An error occurred while fetching courses.');
         
      }finally{
          setIsLoading(false)
      }
  }
  
useEffect(() =>{
  getAllPosts()
}, [])

  return (
    <div className="container px-10 mx-auto mb-8">
      <div className=" bg-gray-300 grid grid-cols-1 lg:grid-cols-12 gap-12"> 
        <div className=" m-3 lg:col-span-8 col-span-1">
          
      <h2>Postssssssssssssssssssss</h2>
       
       </div> 
      </div>
      <div className="lg:col-span-4 col-span-1">
       <div className="lg:sticky relative top-8">
        <Categories/>
        <PostCard/>
        <PostWidget/>
       </div>
      </div>
    </div>
  );
}
