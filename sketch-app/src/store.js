import { configureStore } from "@reduxjs/toolkit";
import {menuReducer} from '@/Slice/menuSlice'

export const store = configureStore({
    reducer: {
        menu: menuReducer
    }
})