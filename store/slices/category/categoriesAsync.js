import { setIsLoading, gettingCategoriesList, setError} from './categorySlice'
import { getCategories } from '../../../src/utils/queries'
import { request } from 'graphql-request';

const graphqlAPI = process.env. NEXT_PUBLIC_BLOG_ENDPOINT ;

export const fetchCategoriesList = () => async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
        const response = await request(graphqlAPI, getCategories);

        // Log the entire response to understand its structure
        console.log('GraphQL Response:', response);

        // Assuming the categories are in response.categories
        const categories = response.categories || [];
        dispatch(gettingCategoriesList(categories));
        console.log('Fetched Categories:', categories);

    } catch (error) {
        dispatch(setError(error.message));
    } finally {
        dispatch(setIsLoading(false));
    }
};

    