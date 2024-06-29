"use client"
import { useEffect, useState} from 'react'
import moment from 'moment'
import parse from 'html-react-parser'
import { getAllComments } from '../utils/queries'
import { VariablesAreInputTypesRule } from 'graphql'
import { comment } from 'postcss'
const Comments = ({slug}) => {

  const [comments, setComments ] = useState([])
  const [isLoading, setIsLoading ] = useState(false);
  const [error, setError] = useState(null)

  const getComments = async (slug) =>{

    setIsLoading(true);

    try{
      const RequestedBody = {
        query: getAllComments, 
        variables: { slug },
      };

      const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'}, 
        body:JSON.stringify(RequestedBody)
      }
      const response = await fetch(process.env.NEXT_PUBLIC_BLOG_ENDPOINT, options);
      const data  = await response.json();
      setComments(data.data.comments)
      console.log(data)
    }catch(err){
      console.log(err)
    }finally{
      setIsLoading(false)
    }
  }
  
  useEffect(() =>{
    getComments(slug)
  }, [slug])
 
  return (
    <>
      {
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
        
      }
      

    </>
  )
}

export default Comments