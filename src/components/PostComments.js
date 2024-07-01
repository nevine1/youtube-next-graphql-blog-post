"use client"
import React, { useEffect, useState } from 'react';

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPostDetails } from '../../store/slices/posts//postsAsync'
import moment from 'moment';
import { IoPersonCircle } from "react-icons/io5";
import { FaCalendarDays } from "react-icons/fa6";

const PostComments = ({comments}) => {
   const dispatch = useDispatch();
    const { postSlug } = useParams();
    
    const { postDetails, isLoading, error } = useSelector((state) => state.posts);
  
    useEffect(() => {
      if (postSlug) {
        dispatch(fetchPostDetails(postSlug));
      }
  
    }, [dispatch, postSlug]);
  
   
  
    if (error) {
      return <p>Error loading comments: {error}</p>;
    }
  
    if (!postDetails || !postDetails.comments || postDetails.comments.length === 0) {
      return <p>No comments found.</p>;
    }
  
    return (
      <div className="bg-white m-4 shadow-lg rounded-lg py-4 px-4">
        <main >
          <h1>Comments for {postDetails.title}</h1>
          {postDetails.comments.map((comment) => (
            <div key={comment.id} className="bg-gray-200 mb-4 p-5 rounded-md">
              <p className="mb-5">{comment.comment}</p>
              <div className="">
                <p className="text-[12px] text-gray-500  flex flex-row mb-2">
                  Commented by: 
                  <span className="px-3 text-[16px] ">
                    <IoPersonCircle />
                  </span>
                  {comment.name}
                </p>
                <p className="text-[12px] text-gray-500  flex flex-row">
                  Commented on: 
                  <span className="px-3 text-[16px] ">
                    <FaCalendarDays />
                  </span>
                  {moment(comment.createdAt).format("MMM DD, YYYY")}
                </p>
              </div>
            </div>
          ))}
        </main>
       
      </div>
    );
  };
  

export default PostComments