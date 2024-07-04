import React from 'react'
import moment from 'moment'
import CommentForm from './CommentForm'
const CategoryPostComments = ({comment, postSlug, slug}) => {

  return (
    <div className="bg-gray-100 shadow-md rounded-lg   border-red-600 p-7">
        
        <div className="   ">
          <p className="mb-3 text-[18px]">{comment.comment}</p>
          <p className="text-gray-600 text-[13px]">Commented by: {comment.name}</p>
          <p className="text-gray-600 text-[13px]"><em>Posted on: {moment(comment.createdAt).format("MMM DD, YYYY")}</em></p>
        </div>
       {/*  <CommentForm postSlug={postSlug} slug={slug}/> */}
      </div>
  )
}

export default CategoryPostComments