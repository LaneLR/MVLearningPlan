import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    url: null,
}

const changeImageSlice = createSlice({
    name: "changeImage",
    initialState,
    reducers: {
        setMemeImage: (state, action) => {
            state.url = action.payload;
        },
        fetchMemeImage: () => {}
    }
})

export const {setMemeImage, fetchMemeImage} = changeImageSlice.actions;
export default changeImageSlice.reducer;