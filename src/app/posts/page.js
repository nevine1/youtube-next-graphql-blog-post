"use client"
//import { request, gql, GraphQLClient } from "graphql-request";
import Image from "next/image";
import { useState, useEffect } from "react";
import { CategoriesList, PostCard, PostWidget, RelatedPostCategoryId } from "../../components/page";
/* import { getPostsQuery } from "../utils/queries";  */
import { gettingPosts } from '../../../store/slices/posts/postsAsync'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsList } from '../../../store/slices/posts/postsAsync'
//import page from "../categories/page";
const page = () => {

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
          <div className="lg:col-span-8 col-span-1 rounded" >
          {
                posts.map((post, index) =>(
                  <PostCard post={post} key={index} />
                ))
              }
          </div>
          <div className="lg:col-span-4 col-span-1 rounded">
            <div className="lg:sticky relative top-8">
              
              <PostWidget/>
              <CategoriesList/>
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default page; 
