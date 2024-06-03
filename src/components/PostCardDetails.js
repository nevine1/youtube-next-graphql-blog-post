
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import moment from 'moment/moment';
import { MdOutlineDateRange } from "react-icons/md";

const PostCardDetails = ({post}) => {

  return (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 overflow-hidden p-2 mb-2 border-b-2 border-gray-100">
        <div className="col-span-3 ">
          <Link href={`/post/${post.slug}`} className="cursor-pointer">
            <img height={70} width={70} alt={post.title}
                src={post.featuredImage.url}
                className="rounded-full"
                />
          </Link>
        </div>

        <div className="col-span-9 block">
            <h3 className="transition duration-500 text-left cursor-pointer hover:text-pink-600 text-[17px] ">
                <Link href={`/post/${post.slug}`}>{post.title}</Link>
            </h3>
            <p className="text-left text-gray-700 text-[15px]">{post.expert.slice(0, 40, "...")}</p>
            <div className="flex items-center  font-small text-gray-500">
                <span className="flex items-center justify-center">
                <MdOutlineDateRange className="pr-1 text-[25px]"/>
                {moment(post.createdAt).format("MMM DD, YYYY")}
                </span>
          </div>
        </div>
        

          
        <hr className="color-red"/>
      </div>
             
    
  )
}

export default PostCardDetails