import { configureStore } from "@reduxjs/toolkit";
import {MenuReducer} from '@/Slice/menuSlice'

export const store = configureStore({
    reducer: {
        menu: MenuReducer
    }
})