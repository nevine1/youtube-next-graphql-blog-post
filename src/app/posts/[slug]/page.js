"use client"
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { getPostDetails } from '../../../utils/queries';
import { Categories, PostCard, PostWidget, RelatedPostCategoryId } from "../../../components/page";
import moment from 'moment';
import { MdOutlineDateRange } from "react-icons/md";
const page = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null); // Initial state with null to avoid rendering issues
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const gettingPostDetails = async () => {
    setIsLoading(true);

    try {
      const requestedBody = {
        query: getPostDetails,
        variables: { slug },
      };

      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestedBody),
      };

      const response = await fetch(process.env.NEXT_PUBLIC_BLOG_ENDPOINT, options);
      const data = await response.json();

      if (data.errors) { 
        // Handle errors from the API response
        console.error('API Error:', data.errors);
        setError('Error fetching post details'); // Set generic error message for user
      } else {
        setPost(data.data.post);
      }
    } catch (err) {
      console.error('Error fetching post details:', err);
      setError('Error fetching post details'); // Set generic error message for user
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    gettingPostDetails(slug);
  }, [slug]);

  // Console log for debugging purposes (remove for production)
  console.log('Post details:', post);

  return (
    <div className="container mx-auto px-10 mb-8">
      {isLoading && <p>Loading post...</p>} {/* Display loading state */}
      {error && <p className="error">Error: {error}</p>} {/* Display error message */}

      {post && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 col-span-1 rounded bg-white">
            <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">

            </div>

            <h2>{post.title}</h2>
            <h2>{post.expert}</h2>
            <div className="block lg:flex items-center justify-center mb-8 w-full">
          
              <div className="flex items-center justify-center font-small text-gray-500">
                <span className="flex items-center justify-center">
                  <MdOutlineDateRange className="pr-1 text-[25px]"/>
                  {moment(post.createdAt).format("MMM DD, YYYY")}
                </span>
              </div>
            </div>

          <div className="text-gray-700 p-2 text-center text-medium font-normal px-4 lg:px-5mb-8">
            <p>{post.expert}</p>
          </div>

           
          </div>
          <div className="lg:col-span-4 col-span-1 bg-white rounded">
            <div className="lg:sticky relative top-8">
              <PostWidget />
        
              {/* <RelatedPostCategoryId/> */}
            </div>
          </div>
        </div>
      )}

      {!post && !isLoading && !error && <p>Post not found.</p>} {/* Display message if no post found */}
    </div>
  );
};

export default page;
