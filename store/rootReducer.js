
import { combineReducers } from "redux";
import postsReducer from './slices/posts/postsSlice';
//import categoriesReducer from './slices/categories/categoriesSlice';
import categoryReducer from './slices/category/categorySlice';

const rootReducer = combineReducers({
    posts: postsReducer, 
    categories: categoryReducer,
})

export default rootReducer; 



