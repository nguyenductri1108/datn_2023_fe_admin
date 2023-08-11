import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./slices/userReducer";

export const store = configureStore({
    reducer: {
        userData: userReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
