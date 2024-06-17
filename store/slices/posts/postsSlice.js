import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
    name: 'posts', //
    initialState:{
        isLoading: false, 
        posts: [], 
        error: null
    }, 
    reducers:{
        setIsLoading:(state, payload) => state.isLoading = payload,
    }
})

export { setIsLoading} = postsSlice.actions
export default postsSlice.reducer;