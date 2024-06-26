
import { combineReducers } from "redux";
import postsReducer from './slices/posts/postsSlice';
import commentsReducer from './slices/comments/commentsSlice';
import categoryReducer from './slices/category/categorySlice';

const rootReducer = combineReducers({
    posts: postsReducer, 
    categories: categoryReducer,
    comments: commentsReducer,
})

export default rootReducer; 



