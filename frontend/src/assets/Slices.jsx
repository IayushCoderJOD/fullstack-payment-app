import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        isLoggedIn: false
    },
    reducers: {
        userLoggedIn: (state) => {
            state.isLoggedIn = true;
        },
        userLoggedOut: (state) => {
            state.isLoggedIn = false;
        }
    }
});

export const { userLoggedIn, userLoggedOut } = userSlice.actions;

export default userSlice.reducer;
