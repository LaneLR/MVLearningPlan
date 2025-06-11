import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    color: 'red',
}

const changeColor = createSlice({
    name: "changeColor",
    initialState,
    reducers: {
        changeToBlue: (state) => {
            state.color = 'blue'
        },
        changeToYellow: (state) => {
            state.color = 'yellow'
        },
    }   
})

export const { changeToBlue, changeToYellow } = changeColor.actions;
export default changeColor.reducer;