"use client"
import { useReducer } from "react";

import { combineReducers } from "redux";
import postsReducer from './slices/posts/postsSlice';

const rootReducer = combineReducers({
    posts: postsReducer, 
})

export default rootReducer; 