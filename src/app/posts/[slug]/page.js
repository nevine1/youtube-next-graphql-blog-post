"use client"
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { PostCard, PostWidget, RelatedPostCategoryId, Categories, 
          Author, CommentForm, Comments, SinglePostDetails
        } from "../../../components/page";
import { fetchPostDetails } from '../../../../store/slices/posts/postsAsync'
import { useDispatch, useSelector } from 'react-redux';
const page = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { posts , postDetails, setIsLoading, setError} = useSelector((state) =>state.posts)
  console.log(slug)
  
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
              
             
              <SinglePostDetails postDetails={postDetails} slug={slug}/>
              
              <Author author={postDetails.author}/>
              <CommentForm slug={postDetails.slug}/>
              <Comments slug={postDetails.slug} />
            </div>
          </div>
          
          <div className="lg:col-span-4 col-span-1  lg:sticky relative">
           
            <div className=" bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-3 mb-3 text-[20px]">
              <RelatedPostCategoryId 
              categoryId ={postDetails.categories[0].slug}
              slug={slug}
              />
            </div>

            <div className=" bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-3 mb-3 text-[20px]">
              <Categories/>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default page;
