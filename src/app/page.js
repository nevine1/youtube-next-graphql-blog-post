"use client"
//import { request, gql, GraphQLClient } from "graphql-request";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Categories, PostCard, PostWidget, RelatedPostCategoryId } from "../components/page";
/* import { getPostsQuery } from "../utils/queries";  */
import { gettingPosts } from '../../store/slices/posts/postsAsync'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsList } from '../../store/slices/posts/postsAsync'
export default function Home() {

  const dispatch = useDispatch();
  
  const { posts, isLoading, error } = useSelector((state) => state.posts);
  /* console.log('Redux State:', state);  */// Inspect the state shape
    //const { posts, isLoading, error } = state.posts || { posts: [], isLoading: false, error: null };



    useEffect(() => {
        dispatch(fetchPostsList());
    }, [dispatch]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

  return (
    <div className="container mx-auto px-10 mb-8">
      {isLoading && <p>Loading posts...</p>} {/* Display loading state */}
      {error && <p className="error">Error: {error}</p>} {/* Display error message */}
      {posts.length > 0 && ( // Render posts only if fetched successfully
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 ">
          <div className="lg:col-span-8 col-span-1 rounded">
          {
                posts.map((post) =>(
                  <PostCard post={post} />
                ))
              }
          </div>
          <div className="lg:col-span-4 col-span-1 rounded">
            <div className="lg:sticky relative top-8">
              
              <PostWidget/>
              <Categories/>
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


/*  const getAllPosts = async () => {
    setIsLoading(true);
    try {
      const graphqlAPI = process.env.NEXT_PUBLIC_BLOG_ENDPOINT;
      // Make the request to your GraphQL endpoint
      const response = await request(graphqlAPI, getPostsQuery);
      // Check for errors in the response
      if (response.errors) {
        setError(response.errors[0].message);
        console.error("GraphQL errors:", response.errors);
        return; // Exit early if there are errors
      }
      // Extract posts data using destructuring
      const { postsConnection: { edges } } = response; // Destructure data
      const posts = edges.map((edge) => edge.node); // Map over edges to get posts
  
      setPosts(posts); // Update state with fetched posts
    } catch (error) {
      setError("An error occurred while fetching posts.");
      console.error("Error fetching posts:", error);
    } finally {
      setIsLoading(false);
    }
  };
  console.log(posts) */
 
  /* useEffect(() => {
    getAllPosts(); 
  }, []);
 */