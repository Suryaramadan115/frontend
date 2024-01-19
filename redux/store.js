
import { configureStore } from "@reduxjs/toolkit";
import  counterReducer from "../redux/sliceredux"
const store = configureStore({
    reducer:{
        product : counterReducer
    }
})

export default store;