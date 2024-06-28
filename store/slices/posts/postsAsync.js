
import { getPostsQuery , getPostDetailsQuery} from '../../../src/utils/queries'

import { request } from 'graphql-request';
import {setIsLoading, gettingPosts, setError, getPostDetails } from './postsSlice'

const graphqlAPI = process.env. NEXT_PUBLIC_BLOG_ENDPOINT ;




export const fetchPostsList = () => async (dispatch) => {

    dispatch(setIsLoading());
    try {

        const response = await request(graphqlAPI, getPostsQuery);
        if (response.errors) {
            throw new Error(response.errors[0].message);
        }
        const { postsConnection: { edges } } = response;
        const posts = edges.map((edge) => edge.node);
        dispatch(gettingPosts(posts));
      
    } catch (error) {
        dispatch(setError(error.message));
    }
};

export const fetchPostDetails = (postSlug) => async (dispatch ) =>{
    dispatch(setIsLoading());
    try{

        const variables = { slug: postSlug };
        const response = await request(graphqlAPI, getPostDetailsQuery, variables );
        console.log(response.post);
        dispatch(getPostDetails(response.post));
        
    }catch(err){
        console.log(err)
    }finally{
        dispatch(setIsLoading(false))
    }
}
