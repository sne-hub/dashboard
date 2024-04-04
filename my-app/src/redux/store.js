import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import dashboardReducer from "./slice";

const store = configureStore({
  reducer: dashboardReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(thunk),
});
export default store;
