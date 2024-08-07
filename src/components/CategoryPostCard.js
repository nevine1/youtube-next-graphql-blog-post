import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import moment from 'moment/moment';
import { MdOutlineDateRange } from "react-icons/md";

const CategoryPostCard = ({post, slug}) => {
    console.log(slug);
    console.log('here is the slug categoryyyyyyyyyyyyyyyyyyyyyyyy ')
  return (
    <div className="bg-white shadow-lg rounded-lg  mb-5 border-red-600 p-7">
        <h1>This is the first post category {slug} </h1>
        <div className=" flex flex-col items-center ">
            <div className="pt-5">
                <img src={post.featuredImage.url} alt={post.slug} 
                className=" h-32 w-32 shadow rounded-full "  />
            </div>
           
                 <h1 className="transition duration-700 text-center py-4 cursor-pointer hover:text-pink-600 text-[20px] font-semibold">
                   {post.title}
                    {/* <Link href={`/categories/${category.slug}`}>{post.title}</Link> */}
                </h1>
                <div className="text-gray-700 py-2 mb-1  text-center text-medium font-normal  lg:px-5mb-8">
                    <p>{post.expert.substring(0, 85) + ' ....'}</p>
                </div>
                <div className="flex items-center  font-small text-gray-500 mb-3">
                    <span className="flex items-center text-[14px]">
                        <MdOutlineDateRange className="pr-1 text-[18px]"/>
                            {moment(post.createdAt).format("MMM DD, YYYY")}
                    </span>
                </div>
              
                
                <Link href={`/categories/${slug}/${post.slug}`}>
                    <span className="transition duration-400 transform hover:-translate-y-1 text-[15px]
                        inline-block bg-pink-500 text-white text-small rounded-full px-4 py-2 mb-3"
                    >Continue Reading</span>
                </Link>
               
              
                <p className="mb-4"> 
                    {
                        post.comments.length == 0 ? (
                            <span>No comments </span>
                        ) :  (post.comments.length > 1 ) ? (
                            <span>{post.comments.length} Comments </span>
                        ) : (
                            <span>{post.comments.length} Comment</span>
                        )
                    }
                </p>
                   
             
                { 
                    post.comments.length > 0 ? (
                     <Link href={`/categories/${slug}/${post.slug}/comments`}
                        className="transition duration-400 transform hover:-translate-y-1 text-[15px]
                        inline-block bg-pink-500 text-white text-small rounded-full px-4 py-2 mb-3"
                        >Show Comments 
                    </Link> 
                    ) : (
                        null
                    )
                }
        </div>
      </div>
  )
}

export default CategoryPostCard