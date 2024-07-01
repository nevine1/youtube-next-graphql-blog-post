"use client"
import {useEffect } from 'react'
import { useParams } from 'next/navigation';
import { SinglePostDetails, PostComments,
       CommentForm, Author, RelatedPostCategoryId} 
        from '../../../../components/page'
import { fetchPostDetails } from '../../../../../store/slices/posts/postsAsync';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
const page = ({post}) => {
    const { postSlug } = useParams();
    const dispatch = useDispatch();
    const { postDetails } = useSelector((state) => state.posts);
    
    useEffect(() =>{
        if(postSlug){
            dispatch(fetchPostDetails(postSlug))
        }
    }, [dispatch, postSlug])
 
  return (
    <>
      <div className="container mx-auto px-10 mb-8">

      {postDetails && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 col-span-1 rounded">
            <div className=" rounded-lg p-0 lg:p-8 pb-12 mb-8">
             
              <SinglePostDetails postDetails={postDetails} />
              <p className="text-lg">{postDetails.author.name}</p>
              <Author author={postDetails.author}/>
              <PostComments comments={postDetails.comments} />
              <CommentForm slug={postDetails.slug} author={postDetails.author}/>
             
            </div>
          </div>
          
          <div className="lg:col-span-4 col-span-1  lg:sticky relative">
           
            <div className=" bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-3 mb-3 text-[20px]">
              
              <RelatedPostCategoryId categoryId ={postDetails.categories[0].slug} postSlug={postSlug}/>
              
            </div>

            {/* <div className="bg-white p-3 pb-2 rounded-lg">
              <Categories/>
            </div> */}

          </div>
        </div>
      )}

    </div>
    </>
  )
}

export default page