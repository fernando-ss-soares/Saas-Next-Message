import { createSlice } from "@reduxjs/toolkit";

const initialState = true;

const authSlice = createSlice({
    name: 'auth',
    initialState
});

export default authSlice.reducer;