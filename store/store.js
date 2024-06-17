import { configureStore } from "@reduxjs/toolkit";
/* import rootReducer from './rootReducer' */
import postsReducer from './slices/posts/postsSlice'


export const store = configureStore({
  reducer: {
      posts: postsReducer,
  }
})