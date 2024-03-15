import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../assets/Slices"

const store = configureStore({

    reducer: {
        user: userSlice,
    }
})

export default store;