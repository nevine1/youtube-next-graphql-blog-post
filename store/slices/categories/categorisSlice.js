import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
    name: "categories", 
    initialState: {
        categories: [], 
        isLoading: false, 
        error: null
    }, 
    reducer: {
        
    }
})