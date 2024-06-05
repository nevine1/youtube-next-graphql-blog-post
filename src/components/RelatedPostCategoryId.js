import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { gql } from 'graphql-request';
import { getRelatedPostCategoryId} from '../utils/queries'

const graphAPI = process.env.NEXT_PUBLIC_BLOG_ENDPOINT;



const RelatedPostCategoryId = ({ categoryId }) => {
  const [relPosts, setRelPosts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch related posts based on category ID
  const getRelatedPosts = async (categoryId) => {
    setIsLoading(true)
    try{
        const requestBody = {
          query: recentPosts 
        };
        const options = {
          method: 'POST',
          headers:{'content-type': 'application/json'},
          body: JSON.stringify(requestBody), 
          variables: {}
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
  };

  useEffect(() => {
    if (categoryId) {
      getRelatedPosts(categoryId);
    }
  }, [categoryId]);
console.log(categoryId);
  return (
    <div className="bg-white rounded-lg mb-8 p-5">
      <h2 className="font-semibold border-b text-xl mb-8">Related Posts</h2>
      {isLoading ? (
        <p>Loading posts...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        relPosts.map((post) => (
          <h2>{post.slug}</h2>
        ))
      )}
    </div>
  );
};

export default RelatedPostCategoryId;
