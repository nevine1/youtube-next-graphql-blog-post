
import React from 'react'
import Link from 'next/link'
const PostCard = ({post}) => {
  console.log('here is the psot page ');
  console.log(post);
  console.log('here is the post endsinggggggggggggggg');
  return (
      <div className="bg-white shadow-lg p-0 lg:p-8 pb-12 rounded-lg mb-8">
        <div className="relative overflow-hidden pb-80 mb-6 shadow-md">
          <h2 className="transition duration-400 hover:text-red-400 text-center
             text-4xl  font-semi-bold
             mb-200 cursor-pointer">{post.slug}</h2>
          <h2>{post.categories.slug}</h2>
          <img src={post.featuredImage.url}
            className="absolute shadow-md object-top object-cover h-100 w-full "
          />
          <h1 className="transition duration-400 text-center
             text-4xl  font-semi-bold
             mb-200 cursor-pointer">
            <Link href={`/post/${post.slug}`}>{post.title}</Link>
          </h1>
        </div>
      </div>
             
    
  )
}

export default PostCard