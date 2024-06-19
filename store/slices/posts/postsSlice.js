import { createSlice } from '@reduxjs/toolkit';
import { request } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_BLOG_ENDPOINT;

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        setIsLoading: (state, action) => {
            state.isLoading = true;
            state.error = null;
        },
        gettingPosts: (state, action) => {
            state.posts = action.payload;
            state.isLoading = false;
        },
        setError: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const { setIsLoading, gettingPosts, setError } = postsSlice.actions;
export default postsSlice.reducer;