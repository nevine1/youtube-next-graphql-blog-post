
import { combineReducers } from "redux";
import postsReducer from './slices/posts/postsSlice';
import categoriesReducer from './slices/categories/categoriesSlice';

const rootReducer = combineReducers({
    posts: postsReducer, 
    categories: categoriesReducer,
})

export default rootReducer; 



