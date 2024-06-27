"use client"
import {useEffect } from 'react'
import { fetchPostComments } from '../../../../../store/slices/comments/commentsAsync'
import { useParams } from 'next/navigation'
import { useDispatch,  useSelector } from 'react-redux'
const page = () => {
    const { slug } = useParams();
    const dispatch = useDispatch();
    const { isLoading, comments, setError } = useSelector((state) =>state.comments);
    
    console.log('post comment slug')
    console.log(comments);
    console.log(slug)
     
    useEffect(() =>{
        dispatch(fetchPostComments(slug));
    }, [dispatch])
  return (
    <div>Hello commentssssssssssssssssssssssssssssssssssssssss</div>
  )
}

export default page