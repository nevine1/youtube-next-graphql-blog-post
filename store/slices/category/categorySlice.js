import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name: 'categories', 
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
            state.categories = action.payload;
            state.isLoading = false;
        }, 
        addNewCategory: (state, action) =>{
            state.categories.push(action.payload);
            state.isLoading = false;
        },
        setError: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
})
export const { setIsLoading, gettingCategoriesList, setError, addNewCategory } = categorySlice.actions;
export default categorySlice.reducer