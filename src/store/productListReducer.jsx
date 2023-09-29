import { createAction, createReducer } from "@reduxjs/toolkit"


const defaultState = []

export const ADD_PRODUCT_LIST = createAction('ADD_PRODUCT_LIST')
export const HOME_SALE_LIST = createAction('HOME_SALE_LIST')

export default createReducer(defaultState, (builder) => {
    builder
        .addCase(ADD_PRODUCT_LIST, (state, action) => {
            return state = [...action.payload]
        })
        
})