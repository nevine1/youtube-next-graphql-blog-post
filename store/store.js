import { configureStore , getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from './rootReducer'
import postsReducer from './slices/posts/postsSlice'
import thunk from 'redux-thunk';

//const middleware = getDefaultMiddleware();
const store = configureStore({
  reducer: rootReducer,

    /* middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(), */
})

export default store;