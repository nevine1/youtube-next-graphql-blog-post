import { setIsLoading , getPostComments, setError} from './commentsSlice'; 
import { request } from 'graphql-request';
import { getPostsQuery , getCategoryPostsQuery} from '../../../src/utils/queries'

const graphqlAPI = process.env. NEXT_PUBLIC_BLOG_ENDPOINT ;

export const fetchPostComments = (slug) => async (dispatch) => {
    dispatch(setIsLoading(true));

    try{
        const variables = {slug};
        const response = await request(graphqlAPI, getCategoryPostsQuery, variables);
        
        
        dispatch(getPostComments(response.comments))
    }catch(err){
        console.log(err);
    }finally{
        dispatch(setIsLoading(false));
    }
}