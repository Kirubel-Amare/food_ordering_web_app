import { configureStore,applyMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import thunk from "thunk";

const store = configureStore({reducer: rootReducer} ,applyMiddleware(thunk));

export default store;