"use client"
import React, { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostComments } from '../../../../../../store/slices/comments/commentsAsync';
import { getPostComments , setIsLoading, setError} from '../../../../../../store/slices/comments/commentsSlice';
import { CategoryPostComments } from '@/components/page';
import Link from 'next/link'

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
 
console.log(`comments`)
console.log(comments)
  return (
    <div className="container mx-auto px-4" style={{width: '70%'}}>
      <div className="mx-auto flex items-center justify-between mb-4" >
        <h2 className="font-semibold text-[22px] mb-4">Comments for  
          <span className="text-pink-400 cursor-pointer"> 
            <Link href={`/categories/${slug}/${postSlug}`}> {postSlug} </Link>
          </span>
          post:
        </h2>
      <Link href={`/categories/${slug}`} 
        className="px-6 py-4 bg-pink-400 rounded-full text-white text-[16px] text-semibold"
      >Back to {slug}  posts</Link>
      </div>
      {comments.map((comment) => (
        <div key={comment.id} className="mx-auto bg-white shadow-lg rounded-lg p-6 mb-4"
        
          >
            
          <CategoryPostComments comment={comment} postSlug={postSlug}/>
        </div>
      ))}
      
    </div>
  );
};
  

export default page;
