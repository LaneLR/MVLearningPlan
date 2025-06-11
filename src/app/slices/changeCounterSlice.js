import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
}

const changeCounterSlice = createSlice({
    name: "changeCounter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        changeByAmount: (state, action) => {
            state.value += action.payload;
        },
    }
})

export const { increment, decrement, changeByAmount } = changeCounterSlice.actions;
export default changeCounterSlice.reducer;

