'use client'
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import counterReducer from "./app/slices/changeCounterSlice";
import colorReducer from './app/slices/changeColorSlice'
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: { 
    changeCount: counterReducer,
    changeColor: colorReducer,
},
    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare({ thunk: false }).concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga)

export default function Providers({children}) {
    return (
        <>
            <Provider store={store}>
                {children}
            </Provider>
        </>
    )
}