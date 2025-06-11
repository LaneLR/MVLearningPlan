'use client'
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import counterReducer from "./app/slices/changeCounterSlice";
import colorReducer from './app/slices/changeColorSlice'

const store = configureStore({
  reducer: { 
    changeCount: counterReducer,
    changeColor: colorReducer,
},
});

export default function Providers({children}) {
    return (
        <>
            <Provider store={store}>
                {children}
            </Provider>
        </>
    )
}