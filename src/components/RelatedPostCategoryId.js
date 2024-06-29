"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { gql } from 'graphql-request';
import { getRelatedPostCategoryId} from '../utils/queries'
import { useParams } from 'next/navigation'
import Link from 'next/link'
const graphAPI = process.env.NEXT_PUBLIC_BLOG_ENDPOINT;

const RelatedPostCategoryId = ({categoryId, postSlug, slug}) => {
  
  const [relPosts, setRelPosts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

 

  const getRelatedPosts = async (categoryId) => {
    setIsLoading(true);
    try {
      const requestBody = {
        query: getRelatedPostCategoryId,
        variables: { slug: categoryId }
      };

      const response = await fetch(graphAPI, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody)
      });

      const data = await response.json();

      if (data.errors) {
        setError(data.errors[0].message);
      } else {
        setRelPosts(data.data.posts);
      }
    } catch (err) {
      setError('An error occurred while fetching posts.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    //console.log('Category ID in useEffect:', categoryId); // Debugging log
    if (categoryId) {
      getRelatedPosts(categoryId);
    }
  }, [categoryId]); 

  return (
    <div className="bg-white rounded-lg mb-8 p-5">
      <h2 className="font-semibold border-b text-xl mb-8">Related Posts</h2>

        {isLoading ? (
          <p>Loading posts...</p>
        ) : error ? (
          <p>{error}</p>
        ) :  ( 
          
          relPosts.map((post) => 
            /* postSlug !== post.slug && */ //this code to not display the post displayed in postDetails page 
            postSlug !== post.slug  && slug !== post.slug ? 
            
              (<div key={post.id} 
                className="bg-gray-100 mb-4 p-3 rounded-md border-red-950"
                   >
                <Link href={`/posts/${post.slug}`}
                  className="font-semibold text-gray-600 hover:text-red-500 transition-all duration-200"
                  >{post.title}</Link>
              </div> 
              ): (
                null
              )
            
          )
       
      )}
    </div>
  );
};



export default RelatedPostCategoryId;