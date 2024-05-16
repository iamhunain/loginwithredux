import { configureStore } from "@reduxjs/toolkit";
import reducer from './authreducer'
export const store = configureStore({
    reducer: reducer
}) 