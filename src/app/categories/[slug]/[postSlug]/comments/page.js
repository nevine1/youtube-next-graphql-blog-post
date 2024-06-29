
"use client";
import { useEffect } from 'react'
import { CategoryPostComments } from '../../../../../components/page'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPostDetails } from '../../../../../../store/slices/posts/postsAsync';
const page = ({postSlug}) => {
    const dispatch = useDispatch();
    const { postDetails } = useSelector((state) => state.posts)

    useEffect(() => {
        dispatch(fetchPostDetails(postSlug))
    }, [dispatch, postSlug])
  

  return (
    <div>
        <h2>hello comments</h2>
        
    </div>
  )
}

export default page
/* import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page */