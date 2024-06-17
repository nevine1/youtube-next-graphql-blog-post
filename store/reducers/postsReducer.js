import { createSlice } from "@reduxjs/toolkit";

const postsReducer = createSlice({
    name: 'posts', //
    initialState:{
        isLoading: false, 
        posts: [], 
        error: null
    }
})