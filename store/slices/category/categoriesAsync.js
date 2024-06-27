import { setIsLoading, gettingCategoriesList, setError} from './categorySlice'
import { getCategoriesQuery, getCategoryPostsQuery } from '../../../src/utils/queries'
import { request } from 'graphql-request';
import { gettingPosts } from '../posts/postsSlice'
import { BiSolidBugAlt } from 'react-icons/bi';
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

export const fetchCategoryPostsList22 = (slug) => async (dispatch) => {
    dispatch(setIsLoading());

    const variables = { slug };
    try {
        const requestedBody={ 
            query: getCategoryPostsQuery, 
            variables: { slug }
        } 
        const options = { 
            method: "POST", 
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(requestedBody),
        }

        const response = await fetch( graphqlAPI, options);
        //const response = await request(graphqlAPI, getCategoryPostsQuery, variables);
        //console.log('Response:', response);
    
      
       
        dispatch(getPostsByCategorySuccess(response.category.posts));

    } catch (error) {
        dispatch(setError(error.message));
    } finally {
        dispatch(setIsLoading());
    }
};

export const fetchCategoryPosts11111 = (slug) => async (dispatch) => {
  const graphqlAPI = process.env.NEXT_PUBLIC_BLOG_ENDPOINT;
  console.log(slug)
  dispatch(setIsLoading());

  const query = getCategoryPostsQuery;

  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
          query,
         variables: slug  
        }),
  };

  try {
    const response = await fetch(graphqlAPI, options);
    const data = await response.json();
    console.log(data.data.category)
    dispatch(getPostsByCategorySuccess(data.data.category.posts));

    /* if (!data.errors) {
      dispatch(getPostsByCategorySuccess(data.data.category.posts));
    } else {
      const errorMessage = data.errors[0].message;
      dispatch(setError(errorMessage));
    } */
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setIsLoading());
  }
};


