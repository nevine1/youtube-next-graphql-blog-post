import { setIsLoading , getComments, setError} from './commentsSlice'; 
import { request } from './graphql-request';
const graphqlAPI = process.env. NEXT_PUBLIC_BLOG_ENDPOINT ;

export const fetchPostComments = (slug) => async (dispatch) => {
    dispatch(setIsLoading())
}