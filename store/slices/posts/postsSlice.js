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
        fetchPostsStart(state) {
            state.isLoading = true;
            state.error = null;
        },
        fetchPostsSuccess(state, action) {
            state.posts = action.payload;
            state.isLoading = false;
        },
        fetchPostsFailure(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchPostsStart, fetchPostsSuccess, fetchPostsFailure } = postsSlice.actions;
export default postsSlice.reducer;