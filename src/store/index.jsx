import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoryListReducer from "./categoryListReducer";
import productListReducer from "./productListReducer";



const rootReducer = combineReducers({
    categoryList: categoryListReducer,
    productList: productListReducer,
})


export const store = configureStore({
    reducer: rootReducer
})