import { setIsLoading , getPostComments, setError} from './commentsSlice'; 
import { request } from 'graphql-request';
import { GetPostComments} from '../../../src/utils/queries'
import { addNewCategory} from '../../../src/utils/mutations'

const graphqlAPI = process.env. NEXT_PUBLIC_BLOG_ENDPOINT ;

/* export const fetchPostComments = (postSlug) => async (dispatch) => {
    dispatch(setIsLoading(true));

    try{
        
        const variables = {slug: postSlug};
 
        const response = await request(graphqlAPI, getPostCommentsQuery, variables);
        
        if (response.errors) {
            throw new Error(response.errors[0].message);
        }

        dispatch(getPostComments(response.post.comments))
        console.log(response.comments)
    }catch(error){
        dispatch(setError(error.message));
    }finally{
        dispatch(setIsLoading(false));
    }
} */


export const fetchPostComments = (postSlug) => async (dispatch) => {
    dispatch(setIsLoading(true));
    console.log('Fetching comments for slug:', postSlug); 
    try {
      const variables = { slug: postSlug };
      const query = `
      query getPostCommentsQuery($slug: String!) {
        post(where: {slug: $slug}) {
            title
            comments {
            comment
            name
            email
            createdAt
            }
        }
        }
      `;
      const response = await request(graphqlAPI, GetPostComments, variables);
      console.log('GraphQL response:', response);
      
      if (response.errors) {
        throw new Error(response.errors[0].message);
      }
  
      dispatch(getPostComments(response.post.comments));
      console.log('Comments dispatched:', response.data.post.comments);
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setIsLoading(false));
    }
  };

