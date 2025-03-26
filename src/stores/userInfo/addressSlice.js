import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    address: {} // Ensure the default state is an object
};

export const addressSlice = createSlice({
    name: "address",
    initialState,
    reducers: {
        setAddress: (state, action) => {
            state.address = action.payload; // Directly modify state
        },
        clearAddress: (state) => {
            state.address = {}; // Reset state
        }
    }
});

// Safe selector to avoid undefined issues
export const getAddress = (state) => state.address?.address || {};

export const { setAddress, clearAddress } = addressSlice.actions;

export default addressSlice.reducer;
