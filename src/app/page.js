"use client"
//import { request, gql, GraphQLClient } from "graphql-request";
import Image from "next/image";
import { useState, useEffect } from "react";
import { TbBrandRedux } from "react-icons/tb";
import { SiGraphql } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
export default function Home() {




   

  return (
    <div className="container mx-auto px-10 mb-8 flex items-center  justify-center ">
      <main >
        <h2>Welcome to my Next<span>js</span> 14 Project</h2>
        <div className="flex items-center py-3">
          <RiNextjsLine className="font-bold text-8xl text-slate-700 mr-6" />
          <span className="font-semibold text-3xl text-zinc-600 italic">
            Next
          </span>
          <span>.js</span>
        </div>
        <div className="flex items-center py-3">
          <SiGraphql className="font-bold text-8xl text-fuchsia-500 mr-6" />
          <span className="font-semibold text-3xl text-zinc-600 italic">
            GraphQL 
          </span>
        </div>
        <div className="flex items-center py-3">
          <TbBrandRedux className="font-bold text-8xl text-indigo-600 mr-6" />
          <span className="font-semibold text-3xl text-zinc-600 italic">
            Redux/Toolkit  
          </span>
        </div>
        
       
      </main>
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