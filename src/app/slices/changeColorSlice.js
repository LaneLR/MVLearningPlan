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
        changeToBlueAsync: () => {},
    }   
})

export const { changeToBlue, changeToYellow, changeToBlueAsync } = changeColor.actions;
export default changeColor.reducer;