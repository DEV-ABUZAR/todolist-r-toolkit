import { configureStore } from "@reduxjs/toolkit";
import  counterSlice  from "../../features/todoSlice";


 const store = configureStore({
    reducer : {
        todo : counterSlice
    },
})
export default store;