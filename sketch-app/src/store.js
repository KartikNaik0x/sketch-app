import { configureStore } from "@reduxjs/toolkit";
import {menuReducer} from '@/Slice/menuSlice'
import {toolboxReducer} from '@/Slice/toolboxSlice'


export const store = configureStore({
    reducer: {
        menu: menuReducer,
        toolbox: toolboxReducer
    }
})