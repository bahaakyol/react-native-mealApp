import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import mealReducer from "./reducers/mealReducer";

const reducer = combineReducers({
  meal: mealReducer,
  //auth: authReducer
});

const store = configureStore({ reducer });
export default store;
