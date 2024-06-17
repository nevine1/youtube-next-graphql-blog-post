"use client"
import { useReducer } from "react";

import { combineReducers } from "redux";
import postsReducer from './reducers/postsSlice';

const rootReducer = combineReducers({
    posts: postsReducer, 
})

export default rootReducer; 