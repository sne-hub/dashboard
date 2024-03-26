import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./slice";

const store = configureStore({
    reducer: dashboardReducer
})
export default store