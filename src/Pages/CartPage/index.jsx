import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './CartPage.module.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { addToCartAction, removeFromCartAction, instantRemoveFromCartAction } from '../../store/cartReducer';

function CartPage() {
  const cart = useSelector((state) => state.cartData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const baseUrl = "http://localhost:3333";

  const handleStepBack = () => {
    navigate(-1);
  }

  const handlePlusClick = (id) => {
    dispatch(addToCartAction(id, cart[id].product));
  };

  const handleMinusClick = (id) => {
    if (cart[id].count > 1) {
      dispatch(removeFromCartAction(id));
    } else {
      dispatch(instantRemoveFromCartAction(id));
    }
  };

  const handleRemoveClick = (id) => {
    dispatch(instantRemoveFromCartAction(id));
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const [phone, setPhone] = useState('');
  const numbersOnly = /^[0-9]*$/;

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!phone.match(numbersOnly)) {
      console.error('Phone number should contain numbers only.');
      return;
    }

    if (phone.length !== 11) {
      console.error('Phone number should be 11 digits long.');
      return;
    }
    const apiUrl = 'http://localhost:3333/order/send';
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone }),
      });
      if (response.ok) {
        console.log('Order request sent successfully.');
      } else {
        console.error('Error sending the order request.');
      }
    } catch (error) {
      console.error('Request error:', error);
    }
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;

    Object.keys(cart).forEach((id) => {
      const item = cart[id];
      const price = item.product.discont_price || item.product.price;
      totalPrice += price * item.count;
    });

    return totalPrice.toFixed(2) + '$';
  };

  // Check if the cart is empty
  const isCartEmpty = Object.keys(cart).length === 0;

  return (
    <div className={s.cartPage}>
      <h2 className={s.cartH2}>Shopping cart</h2>
        <div className={s.backToStore}>
          <p className={s.backToStoreP}>Back to Store</p>
          <img onClick={handleStepBack} src="./assets/forward.png" alt="" className={s.forward} />
        </div>
      {isCartEmpty ? <p className={s.emptyCartP}>Your cart is empty</p> : (
        <div className={s.cart}>
          <div className={s.cartItemContainer}>
            {cart && Object.keys(cart).map((id) => {
              const imageURL = baseUrl + cart[id].product.image;
              return (
                <div key={id} className={s.cartItem}>
                  <img src={imageURL} alt="cartItemImg" className={s.cartItemImg} />
                  <div className={s.cartItemInfo}>
                    <div className={s.cartItemTop}>
                      <h3 className={s.cartItemTopH3}>{cart[id].product.title}</h3>
                      <img className={s.cartItemTopX} src="./assets/x.png" alt="x" onClick={() => handleRemoveClick(id)} />
                    </div>
                    <div className={s.cartItemPrice}>
                      {cart[id].product.discont_price && (
                        <p className={s.actualPrice}>{cart[id].product.discont_price}$</p>)
                      }
                      {(!cart[id].product.discont_price && cart[id].product.price) ? (
                        <p className={s.actualPrice}>{cart[id].product.price}$</p>
                      ) : (
                        <p className={s.priceWithoutDiscount}>{cart[id].product.price}$</p>)
                      }
                    </div>
                    <div className={s.cartItemBtns}>
                      <div className={s.cartItemBtnsContainer}>
                        <img className={s.cartItemBtn} src="./assets/minus.png" alt="minus" onClick={() => handleMinusClick(id)} />
                        <p className={s.cartItemBtnsP}>{cart[id].count}</p>
                        <img className={s.cartItemBtn} src="./assets/plus.png" alt="plus" onClick={() => handlePlusClick(id)} />
                      </div>
                    </div>
                  </div>
                </div>)
            })}
          </div>
          <div className={s.orderDetails}>
            <h3 className={s.orderDetailsH3}>Order details</h3>
            <div className={s.orderDetailsSumm}>
              <p className={s.orderDetailsSummP}>Total</p>
              <h3 className={s.orderDetailsSummH3}>{calculateTotalPrice()}</h3>
            </div>
            <form className={s.orderDetailsForm} onSubmit={handleFormSubmit}>
              <input type="text"
                placeholder='Phone number'
                value={phone}
                onChange={(e) => {
                  const inputText = e.target.value;
                  if (inputText.match(numbersOnly) && inputText.length <= 11) {
                    setPhone(inputText);
                  }
                }} />
              <input type="submit" value={'Order'} className={s.orderBtn} />
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
