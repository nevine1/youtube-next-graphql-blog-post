import { createSlice } from "@reduxjs/toolkit";

const commentsSlice = createSlice({
    name: 'comments', 
    initialState: {
        comments: [], 
        error: null,
        isLoading: false,
    }, //
    reducers:{
        setIsLoading: (state, action) =>{
            state.isLoading = action.payload;
        }, 
        getComments: (state, action) => {
            state.comments = action.payload;
        }, 
        setError: (state, action) =>{
            state.error = action.payload
        }
    }
});

export const {setIsLoading , getComments, setError } = commentsSlice.actions; //
export default commentsSlice.reducer;