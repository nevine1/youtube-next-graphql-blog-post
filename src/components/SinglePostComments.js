import {useState, useEffect }from 'react'
import moment from 'moment'
import parse from 'html-react-parser'
import { getAllComments } from '../utils/queries'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
const Comments = ({slug}) => {

  
 
  return (
    <>
     {/*  {
        comments.length > 0 && (
          <div className="bg-white m-4 rounded-lg p-6 shadow-md pb-8">
            <h2>{comments.length} Comments</h2>
            {
              comments.map((comment) =>(
                <div className="bg-gray-200 p-4 m-3 rounded-md">
                  <p className="text-[13px] mb-3">
                    <span className="">
                      commented by: {comment.name}
                      {' '}
                      on
                      {' '}
                      {moment(comment.createdAt).format("MMM DD YYYY")}
                     </span>
                    </p>
                  <p className="whitespace-pre-line text-grey-600 ">
                    {parse(comment.comment)}
                 
                 </p>
                </div>
              ))
              
            }
          </div>
          
        )
        
      } */}
      

    </>
  )
}

export default Comments