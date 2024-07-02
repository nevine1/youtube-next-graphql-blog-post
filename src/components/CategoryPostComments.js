import React from 'react'

const CategoryPostComments = ({comment}) => {

  return (
    <div className="bg-gray-100 shadow-md rounded-lg   border-red-600 p-7">
        
        <div className=" flex flex-col items-center ">
          <p><strong>{comment.name}</strong> said:</p>
          <p>{comment.comment}</p>
          <p><em>Posted on: {new Date(comment.createdAt).toLocaleDateString()}</em></p>
           
            
        
        </div>
      </div>
  )
}

export default CategoryPostComments