import { createSlice } from "@reduxjs/toolkit";
import { setIsLoading } from "../posts/postsSlice";

const categoriesSlice = createSlice({
    name: "categories", 
    initialState: {
        categories: [], 
        isLoading: false, 
        error: null 
    }, 
    reducers: {
        setIsLoading:(state, action) =>{
            state.isLoading = true;
            state.error = null;
        }, 
        gettingCategoriesList: (state, action) =>{
            state.categories = action.payload
            state.isLoading = false;
        }, 
        setError: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
})

export const { setIsLoading, gettingCategoriesList, setError } = categoriesSlice.actions;
export default categoriesSlice.reducer;