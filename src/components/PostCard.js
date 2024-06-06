
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import moment from 'moment/moment';
import { MdOutlineDateRange } from "react-icons/md";

const PostCard = ({post}) => {
  return (
      <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
         <div className="relative overflow-hidden shadow-md pb-80 mb-6">
            <img src={post.featuredImage.url} alt={post.slug} 
              className="object-top absolute h-80 w-full 
              object-cover  shadow-lg
              rounded-t-lg lg:rounded-lg" />
        </div>

        <h1 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
          <Link href={`/post/${post.slug}`}>{post.title}</Link>
        </h1>
        <div className="block lg:flex items-center justify-center mb-8 w-full">
          <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
            <img height={40} width={40} alt={post.author.name}
                  src={post.author.photo.url}
                  className="bg-gray-200 align-middle rounded-md"
            />
            <p className="inline align-middle  text-gray-700 text-lg ml-2">{post.author.name}</p>
          </div>
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
        
        <div className="text-center">
          <Link href={`/post/${post.slug}`}>
            <span className="transition duration-400 transform hover:-translate-y-1
                inline-block bg-pink-500 text-white text-small rounded-full px-5 py-2"
            >Continue Reading</span>
          </Link>

        </div>
        
      </div>
             
    
  )
}

export default PostCard