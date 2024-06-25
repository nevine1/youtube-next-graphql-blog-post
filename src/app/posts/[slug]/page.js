"use client"
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Categories, PostCard, PostWidget, RelatedPostCategoryId, 
          Author, CommentForm, Comments, SinglePostDetails
        } from "../../../components/page";
import { fetchPostDetails } from '../../../../store/slices/posts/postsAsync'
import { useDispatch, useSelector } from 'react-redux';
const page = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { posts , postDetails, setIsLoading, setError} = useSelector((state) =>state.posts)
 
  /* const [post, setPost] = useState(null); // Initial state with null to avoid rendering issues
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); */
  console.log(slug)
  /* const gettingPostDetails = async () => {
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
 */
  useEffect(() => {
    dispatch(fetchPostDetails(slug));
  }, [dispatch, slug]);

  
  return (
    <div className="container mx-auto px-10 mb-8">
      {/* {isLoading && <p>Loading post...</p>} 
      {error && <p className="error">Error: {error}</p>}  */}

      {postDetails && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 col-span-1 rounded">
            <div className=" rounded-lg p-0 lg:p-8 pb-12 mb-8">
              
             
              <SinglePostDetails postDetails={postDetails} />
              <p className="text-lg">{postDetails.author.name}</p>
              <Author author={postDetails.author}/>
              <CommentForm slug={postDetails.slug}/>
              <Comments slug={postDetails.slug} />
            </div>
          </div>
          
          <div className="lg:col-span-4 col-span-1  lg:sticky relative">
           
            <div className=" bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-3 mb-3 text-[20px]">
              <RelatedPostCategoryId categoryId ={postDetails.categories[0].slug}/>
            </div>

            <div className="bg-white p-3 pb-2 rounded-lg">
              <Categories/>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default page;
