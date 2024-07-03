import { setIsLoading , getPostComments, setError} from './commentsSlice'; 
import { request } from 'graphql-request';
import { GetPostComments} from '../../../src/utils/queries'

const graphqlAPI = process.env. NEXT_PUBLIC_BLOG_ENDPOINT ;


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
     
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setIsLoading(false));
    }
  };

