"use client"
import { request, gql, GraphQLClient } from "graphql-request";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Categories, PostCard, PostWidget } from "../components/page";
import { getPostsQuery } from "../utils/queries"; // Assuming GetPostsQuery is defined here

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([]);
  

  const getAllPosts = async () => {
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
  console.log(posts)
 /*  const getAllPosts = async () => {
    setIsLoading(true);
  
    try {
      const requestBody = {
        query: getPostsQuery,
      };
      const options = {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(requestBody),
      };
  
      const graphqlAPI = process.env.NEXT_PUBLIC_BLOG_ENDPOINT;
  
      const response = await fetch(graphqlAPI, options);
      console.log("response status:", response.status);
  
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
  
      const data = await response.json();
  
      // Check for undefined data:
      if (!data || !data.postsConnection) {
        setError("An error occurred while fetching posts. (Data might be undefined)"); // More specific error message
        console.error("Data is undefined:", data);
      } else if (data?.errors) {
        setError(data.errors[0].message);
        console.error("GraphQL errors:", data.errors);
      } else {
        // Access data using map (assuming edges exist now):
        const fetchedPosts = data.postsConnection.edges.map((edge) => edge.node);
        setPosts(fetchedPosts);
      }
    } catch (err) {
      setError("An error occurred while fetching posts.");
      console.error("Error fetching posts:", err);
    } finally {
      setIsLoading(false);
    }
  };
   */

  useEffect(() => {
    getAllPosts(); // Fetch posts on component mount
  }, []);

  return (
    <div className="container px-10 mx-auto mb-8">
      {isLoading && <p>Loading posts...</p>} {/* Display loading state */}
      {error && <p className="error">Error: {error}</p>} {/* Display error message */}
      {posts.length > 0 && ( // Render posts only if fetched successfully
        <div className="bg-gray-300 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="m-3 lg:col-span-8 col-span-1">
            <h2>Postssssssssssssssssssss</h2>
          </div>
          <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8">
              {
                posts.map(post =>(
                  <div>
                    <h2>{post.slug}</h2>
                    <h2>{post.categories.slug}</h2>
                  </div>
                )) 
              }
             
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
