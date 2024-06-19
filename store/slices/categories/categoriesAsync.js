import { setIsLoading, gettingCategoriesList, setError} from './categoriesAsync'
import { getCategories } from '../../../src/utils/queries'
import { request } from 'graphql-request';

const graphqlAPI = process.env. NEXT_PUBLIC_BLOG_ENDPOINT ;
export const fetchCategoriesList = () => 
    async (dispatch ) =>{
        dispatch( setIsLoading(true));
       
        const response = await request(graphqlAPI, getCategories);

        if (response.errors) {
            throw new Error(response.errors[0].message);
            }else{
                dispatch(gettingCategoriesList(response.data))
                }

        try{

        }catch(error){
            dispatch(setError(error.message));
        }finally{
            setIsLoading(false);
        }
    }