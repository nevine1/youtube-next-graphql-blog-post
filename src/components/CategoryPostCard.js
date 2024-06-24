import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import moment from 'moment/moment';
import { MdOutlineDateRange } from "react-icons/md";
const CategoryPostCard = ({post}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
        <div className=" flex flex-row items-center ">
            <div className=" object-cover object-left">
                <img src={post.featuredImage.url} alt={post.slug} 
                className=" h-30 w-40 shadow rounded pr-6"  />
            </div>
            <div className="flex flex-col ">
                <h1 className="transition duration-700  mb-2 cursor-pointer hover:text-pink-600 text-[20px] font-semibold">
                    <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                </h1>
                <div className="block lg:flex items-center  mb-2 w-full">
                    <div className="flex items-center  font-small text-gray-500">
                        <span className="flex items-center ">
                            <MdOutlineDateRange className="pr-1 text-[25px]"/>
                            {moment(post.createdAt).format("MMM DD, YYYY")}
                        </span>
                    </div>
                </div>
                <div className="text-gray-700 py-2 mb-1  text-medium font-normal  lg:px-5mb-8">
                    <p>{post.expert.slice(0, 100)}</p>
                </div>

                <Link href={`/posts/${post.slug}`}>
                    <span className="transition duration-400 transform hover:-translate-y-1 text-[16px]
                        inline-block bg-pink-500 text-white text-small rounded-full px-4 py-2"
                    >Continue Reading</span>
                </Link>
            </div>
        
        </div>
      </div>
  )
}

export default CategoryPostCard