import {useState, useEffect }from 'react'
import moment from 'moment'
import parse from 'html-react-parser'
import { getAllComments } from '../utils/queries'
import { VariablesAreInputTypesRule } from 'graphql'
const Comments = ({slug}) => {
  const [comments, setComments ] = useState([])
  const [isLoading, setIsLoading ] = useState(false);
  const [error, setError] = useState(null)

  const getComments = async () =>{

    setIsLoading(true);

    try{
      const RequestedBody = {
        query: getAllComments, 
        variable: {
          slug
        }
      }

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
  }, [])
  console.log(comments)
  return (
    <div className="bg-white m-4 rounded-lg p-6 shadow-md pb-8">
      {
        comments.length > 0 ? (
          <h2>{comments.length} Comments</h2>
        ) : (
          <h2>{error}</h2>
        )

        
      }
      <h2>Comments</h2>

    </div>
  )
}

export default Comments