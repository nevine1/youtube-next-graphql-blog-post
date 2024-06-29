"use client"
import { useEffect, useState} from 'react'
import moment from 'moment'; // Assuming you're using moment.js for date formatting
import Link from 'next/link';
import { recentPosts, getCategories } from '../utils/queries'; // Assuming this imports your GraphQL query
import axios from 'axios';
import RecentPosts from './RecentPosts'
import { RelatedPostCategoryId } from './page';
const PostWidget = () => {

  const [recPosts, setRecPosts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const graphAPI = process.env.NEXT_PUBLIC_BLOG_ENDPOINT

const getRecentPosts = async () =>{
  setIsLoading(true)
    try{
        const requestBody = {
          query: recentPosts 
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
          setRecPosts(data.data.posts)
        }

    }catch(err){
        setError('An error occurred while fetching courses.');
       
    }finally{
        setIsLoading(false)
    }
}


  useEffect(() => {
    getRecentPosts();
  }, []); // Empty dependency array ensures data is fetched only once

  return (
    <div className="bg-white rounded-lg mb-8 p-5">
      <h2 className="font-semibold border-b text-xl mb-8">Recent Posts</h2>
      <h2>All postssssss</h2>
      {isLoading ? (
        <p>Loading posts...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        // Conditional rendering within useEffect to ensure fetched data
        recPosts.map((post) =>(
          <RecentPosts post={post} key={post.id}/>

        ))
      )} 
      
    </div>
  );
};

export default PostWidget;
