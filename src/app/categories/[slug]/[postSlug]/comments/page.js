"use client"
import React, { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostComments } from '../../../../../../store/slices/comments/commentsAsync';
import { getPostComments , setIsLoading, setError} from '../../../../../../store/slices/comments/commentsSlice';
import { CategoryPostComments } from '@/components/page';


const page = () => {
  const { slug, postSlug } = useParams();
    const dispatch = useDispatch();
    const { comments, isLoading, error } = useSelector((state) => state.comments);
  console.log(postSlug)

  useEffect(() => {
    if (postSlug) {
      console.log('Dispatching fetchPostComments with slug:', postSlug); // Debug log
      dispatch(fetchPostComments(postSlug));
    }
  }, [dispatch, postSlug]);
  

  /* if (error) {
    return <p>Error loading comments: {error}</p>;
  } */

  /* if (!comments || comments.length === 0) {
    return <p>No comments found.</p>;
  } */
console.log(`comments`)
console.log(comments)
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-8">Posts</h1>
      <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
      {comments.map((comment) => (
        <div key={comment.id} className="bg-white shadow-lg rounded-lg p-6 mb-4">
          <CategoryPostComments comment={comment} />
        </div>
      ))}
      </div>
    </div>
  );
};
  

export default page;
