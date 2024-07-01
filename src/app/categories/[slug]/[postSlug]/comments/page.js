"use client"
import React, { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostComments } from '../../../../../../store/slices/comments/commentsAsync';
import { getPostComments , setIsLoading, setError} from '../../../../../../store/slices/comments/commentsSlice';


const page = ({ slug, postSlug }) => {
    const dispatch = useDispatch();
    const comments = useSelector((state) => state.comments.comments);
    const isLoading = useSelector((state) => state.comments.isLoading);
    const error = useSelector((state) => state.comments.error);
  
    useEffect(() => {
      dispatch(setIsLoading(true));
  
      const fetchData = async () => {
        try {
          await dispatch(getPostComments(postSlug));
        } catch (error) {
          dispatch(setError(error.message));
        } finally {
          dispatch(setIsLoading(false));
        }
      };
  
      fetchData();
    }, [dispatch, postSlug]);
  
    if (isLoading) return <div>Loading comments...</div>;
    if (error) return <div>Error fetching comments: {error.message}</div>;
  
    return (
      <div>
        <h2>Comments for {comments?.post?.title}</h2>
        {/* Render comments here */}
        {comments?.map((comment) => (
          <div key={comment.id}>
            {/* Display comment details like name, email, content, etc. */}
          </div>
        ))}
      </div>
    );
  }
  

export default page;
