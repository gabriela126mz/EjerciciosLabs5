import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";
import data from "../../tasks.json"; 

const store= configureStore({
    reducer: rootReducer,
    devTools:true
})

export default store;

