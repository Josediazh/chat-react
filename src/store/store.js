import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./authstore/authSlice";
import { chatSlice } from "./chatstore/chatSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        chat: chatSlice.reducer
    }
})