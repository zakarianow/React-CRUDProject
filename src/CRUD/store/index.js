import { configureStore } from "@reduxjs/toolkit";
import posts from '../store/PostSlice';



const store = configureStore({
    reducer: {
        posts
    }
})

export default store;