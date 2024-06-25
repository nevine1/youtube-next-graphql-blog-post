
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

export const fetchPostDetails = (slug) => async (dispatch ) =>{
    dispatch(setIsLoading(true));
    try{

        const variables = {slug};
        const response = await request(graphqlAPI, getPostDetailsQuery, variables );
        dispatch(getPostDetails(response.post));
        
    }catch(err){
        console.log(err)
    }finally{
        dispatch(setIsLoading(false))
    }
}
