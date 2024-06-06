
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import moment from 'moment/moment';
import { MdOutlineDateRange } from "react-icons/md";
import RelatedPostCategoryId from './RelatedPostCategoryId';

const RecentPosts= ({post}) => {

  return (
      <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
        <div className="flex items-center w-full mb-4">
          <div className="flex-none w-16">
            <Link href={`/posts/${post.slug}`} className="cursor-pointer">
              <img height="60" width="60" alt={post.title}
                  src={post.featuredImage.url}
                  className="rounded-full align-middle"
                  />
            </Link>
          </div>
          <div className="flex-grow ml-4 ">
            <p className="text-gray-500 text-xs">
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </p>
            <Link   href={`/posts/${post.slug}`}
              className="text-md">
              {post.title}
            </Link>
          </div>
        </div>
  
      </div>            
    
  )
}

export default RecentPosts