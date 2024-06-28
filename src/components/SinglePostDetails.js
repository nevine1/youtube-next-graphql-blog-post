import React from 'react'
import { MdOutlineDateRange } from "react-icons/md";
import { BiSolidCategory } from "react-icons/bi";
import moment from 'moment';
import Author from './Author';
const SinglePostDetails = ({postDetails}) => {
  return (
    <>
      <div className="bg-white shadow-lg rounded-lg lg:p-4 pb-4 mb-4">
      <h1 className="my-5 text-2xl font-semibold">{postDetails.title}</h1>
        <div className="relative overflow-hidden shadow-md mb-6">
          <img src={postDetails.featuredImage.url} alt="" className="object-top   w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg" />
        </div>
        <div className="px-4 lg:px-0">
          <div className="flex items-center mb-8 w-full">
            <div className="hidden md:flex items-center justify-center lg:mb-0 lg:w-auto mr-8">
              <img
                alt={postDetails.author.name}
                height="30px"
                width="30px"
                className="align-middle rounded-full"
                src={postDetails.author.photo.url}
              />
              <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">{postDetails.author.name}</p>
            </div>
            <div className="font-medium text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="align-middle">{moment(postDetails.createdAt).format('MMM DD, YYYY')}</span>
            </div>
          </div>
          
          <p>{postDetails.content.markdown}</p>
        </div>
      </div>
    </>
  )
}

export default SinglePostDetails