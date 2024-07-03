import { setIsLoading, gettingCategoriesList, setError, addNewCategory} from './categorySlice'
import { getCategoriesQuery, getCategoryPostsQuery} from '../../../src/utils/queries'
import { createCategoryQuery, createCategory } from '../../../src/utils/mutations'
import { request } from 'graphql-request';
import { gettingPosts } from '../posts/postsSlice'

const graphqlAPI = process.env.NEXT_PUBLIC_BLOG_ENDPOINT ;

export const fetchCategories= () => async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
        const response = await request(process.env.NEXT_PUBLIC_BLOG_ENDPOINT, getCategoriesQuery);

        // Assuming the categories are in response.categories
        const categories = response.categories/*  || [] */;

        dispatch(gettingCategoriesList(categories));

        } catch (error) {
            dispatch(setError(error.message));
        } finally {
            dispatch(setIsLoading(false));
        }
    };


export const fetchCategoryPosts = (slug) => async (dispatch) => {
    dispatch(setIsLoading());

    const variables =  {slug};
    try {
    
        const response = await request(graphqlAPI, getCategoryPostsQuery, variables);
        
        console.log('Response:', response.category.posts);
       
        dispatch(gettingPosts(response.category.posts));

         if (data.errors) {
            const errorMessage = data.errors[0].message;
            dispatch(setError(errorMessage));
        } 
        
    } catch (error) {
        dispatch(setError(error.message));
    } finally {
        dispatch(setIsLoading());
    }
};

export const addCategory = (name, slug ) => async ( dispatch ) =>{
    dispatch(setIsLoading(true)); 

    try{
        variables = { name, slug }
        const response = await request(graphqlAPI, createCategoryQuery, variables);
        dispatch(addNewCategory(response.createCategory));

    }catch(error){
        setError(error.message)
    }
}


