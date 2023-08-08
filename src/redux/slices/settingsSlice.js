import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: "tri",
    email: "tri@gmail.com",
    color: "#f8f8f8",
    activeDate: null,
};

export const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        setData: (state, action) => {
            console.log(action.payload);
            state.title = action.payload.title;
            state.email = action.payload.email;
            state.color = action.payload.color;
            state.activeDate = action.payload.activeDate;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setData } = settingsSlice.actions;

export default settingsSlice.reducer;
