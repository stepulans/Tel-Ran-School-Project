
export const cartActionTypes = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    INSTANT_REMOVE_FROM_CART: 'INSTANT_REMOVE_FROM_CART'
}
function loadCartFromLocalStorage() {
  try {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : {};
  } catch (error) {
    console.error('Error parsing cart data from localStorage:', error);
    return {};
  }
}
export const selectCartItemCount = (state) => {
  const cart = state.cartData;
  return Object.values(cart).reduce((total, item) => total + item.count, 0);
};

let initialCartState = loadCartFromLocalStorage()
export const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
      case cartActionTypes.ADD_TO_CART: {
        const { id, product } = action.payload;
        const newState = { ...state };
        
        if (newState[id]) {
          newState[id] = {
            ...newState[id],
            count: newState[id].count + 1
          };
        } else {
          newState[id] = { product, count: 1 };
          
        }
        return newState;
      }
      case cartActionTypes.REMOVE_FROM_CART: {
        const { id } = action.payload;
        const newState = { ...state };
  
        if (newState[id].count > 1) {
          newState[id] = {
            ...newState[id],
            count: newState[id].count - 1,
          };
        } else {
          delete newState[id];
        }
  
        return newState;
      }
      case cartActionTypes.INSTANT_REMOVE_FROM_CART: {
        const { id } = action.payload;
        const newState = { ...state };
        if (newState[id]) {
          delete newState[id];
        }
        return newState;
      }
      default:
        return state;
    }
  };

  export const addToCartAction = (id, product) => {
    return {
      type: cartActionTypes.ADD_TO_CART,
      payload: { id, product },
    };
  }
  
  export const removeFromCartAction = (id) => {
    return {
      type: cartActionTypes.REMOVE_FROM_CART,
      payload: { id },
    };
  }

  export const instantRemoveFromCartAction = (id) => {
    return {
      type: cartActionTypes.INSTANT_REMOVE_FROM_CART,
      payload: { id },
    };
  };