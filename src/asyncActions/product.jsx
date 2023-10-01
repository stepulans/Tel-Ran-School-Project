import { ADD_PRODUCT_LIST, ADD_DISCOUNTED_PRODUCTS} from "../store/productListReducer"


export function fetchProducts(){
    return function(dispatch){
        fetch('http://localhost:3333/products/all')
            .then(res => res.json())
            .then(data => dispatch(ADD_PRODUCT_LIST(data)))
    }
}

export function fetchDiscountedProducts() {
    return function(dispatch) {
      fetch('http://localhost:3333/products/all')
        .then(res => res.json())
        .then(data => {
          const discountedProducts = data.filter(product => product.discont_price);
          dispatch(ADD_DISCOUNTED_PRODUCTS(discountedProducts));
        });
    }
  }