
import { getPostsQuery } from '../../../src/utils/queries'

import { request } from 'graphql-request';
import {setIsLoading, gettingPosts, fetchPostsFailure  } from './postsSlice'

const graphqlAPI = process.env. NEXT_PUBLIC_BLOG_ENDPOINT ;






export const fetchPosts = () => async (dispatch) => {

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
        dispatch(fetchPostsFailure(error.message));
    }
};
