import { useEffect, useState } from 'react';
import moment from 'moment'; // Assuming you're using moment.js for date formatting
import Link from 'next/link';
import { recentPosts } from '../utils/queries'; // Assuming this imports your GraphQL query

const PostWidget = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getRecentPosts = async () => {
    setIsLoading(true);

    try {
      const requestBody = {
        query: recentPosts,
      };
      const options = {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(requestBody),
      };
      const response = await fetch(process.env.NEXT_PUBLIC_BLOG_ENDPOINT, options);
      const data = await response.json();

      if (response.ok) { // Check for successful response (status code 200)
        setPosts(data.posts); // Update state only if response is successful
      } else {
        setError('An error occurred while fetching posts.');
        console.error('Network response error:', response.status, response.statusText);
      }
    } catch (err) {
      setError('An error occurred while fetching posts.');
      console.error('Error fetching posts:', err);
    } finally {
      setIsLoading(false); // Set loading state to false regardless of success/error
    }
  };

  useEffect(() => {
    getRecentPosts();
  }, []); // Empty dependency array ensures data is fetched only once

  return (
    <div className="bg-white rounded-lg mb-8 p-5">
      <h2 className="font-semibold border-b text-xl mb-8">PostWidget</h2>
      {isLoading ? (
        <p>Loading posts...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        // Conditional rendering within useEffect to ensure fetched data
        useEffect(() => {
          if (posts.length > 0) {
            return (
              posts.map((post) => (
                <div key={post.id}> {/* Add a key for each post */}
                  <h2>{post.slug}</h2>
                  {/* Add more content for each post as needed (e.g., excerpt, author, date) */}
                </div>
              ))
            );
          }
          // Display a message if no posts are fetched
          return <p>No posts found.</p>;
        }, [posts]) // Dependency array ensures re-render when posts change
      )}
    </div>
  );
};

export default PostWidget;
