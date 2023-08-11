import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dataUser: null,
    totalMoney: 0,
};

export const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        saveDataUser: (state, action) => {
            state.dataUser = action.payload;
        },
    },
});

export const { saveDataUser } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const dataCartHolding = (state) => state.cartData.data;

export default userSlice.reducer;
