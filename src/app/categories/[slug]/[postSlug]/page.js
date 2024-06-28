"use client"
import {useEffect } from 'react'
import { useParams } from 'next/navigation';
import { CategoryPostDetails } from '../../../../components/page'
import { fetchPostDetails } from '../../../../../store/slices/posts/postsAsync';
import { useDispatch, useSelector } from 'react-redux'
const page = ({post}) => {
    const { postSlug } = useParams();
    const dispatch = useDispatch();
    const { postDetails } = useSelector((state) => state.posts);
    console.log(postDetails)
    console.log('post deetailssssssssssssss')
    console.log(postSlug)
    useEffect(() =>{
        if(postSlug){
            dispatch(fetchPostDetails(postSlug))
        }
    }, [dispatch, postSlug])
    console.log(postSlug)
    console.log(postDetails)
  return (
    <div>
      <h2>Here is te page of post Detailssssssssssssssssssssss for {postSlug}</h2>
    </div>
  )
}

export default page