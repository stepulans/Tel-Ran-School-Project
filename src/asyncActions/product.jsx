import { ADD_PRODUCT_LIST } from "../store/productListReducer"


export function fetchProducts(){
    return function(dispatch){
        fetch('http://localhost:3333/products/all')
            .then(res => res.json())
            .then(data => dispatch(ADD_PRODUCT_LIST(data)))
    }
}

