"use client"
import {useState, useEffect} from 'react'
import { useParams } from 'next/navigation'
import { getPostDetails } from '../../../utils/queries'
const page = ()  => {
 const { slug } = useParams()
 const [post, setPost ] = useState();
 const [isLoading, setIsLoading] = useState(false)
 const [error, setError ] = useState(null)

 const gettingPostDetails = async () =>{
    setIsLoading(true); 

    try{
      const requestedBody = {
        query: getPostDetails, 
        variables: { slug }
      }
      const options = {
        method: 'POST', 
        headers: {'Content-Type': 'application/json'},
        body : JSON.stringify(requestedBody)
      }

      const response = await fetch(process.env.NEXT_PUBLIC_BLOG_ENDPOINT, options)
      const data = await response.json();
      setPost(data.data.post)
    }catch(err){
      console.log(err)
    }finally{
      setIsLoading(false)
    }
 }
console.log(post)
 useEffect(() => {
  gettingPostDetails(slug)
 }, [])
  return (
    <div>
      {
        post && (
          <div>
            <h2>{post.title}</h2>
     <p>{post.content.markdown}</p>
            <h2>{post.slug}</h2>
          </div>
        )
      } 
    </div>
  )
}

export default page
