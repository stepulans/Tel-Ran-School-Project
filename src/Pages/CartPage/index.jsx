import React from 'react';
import { useSelector } from 'react-redux';
import s from './CartPage.module.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import CartItem from '../../components/CartItem';
function CartPage() {
  const cart = useSelector((state) => state.cartData);
  const navigate = useNavigate();
  

  const handleStepBack = () => {
    navigate(-1);
  }

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
    if (cart && cart.length > 0) {
      let totalPrice = 0;

      cart.forEach((item) => {
        const price = item.product.discont_price || item.product.price;
        totalPrice += price * item.count;
      });

      return totalPrice.toFixed(2);
    } else {
      return "0.00";
    }
  };
  const isCartEmpty = cart.length === 0;
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
          {cart.map((item, index) => (
              <CartItem
                key={index}
                item={item}
              />
            ))}
          </div>
          <div className={s.orderDetails}>
            <h3 className={s.orderDetailsH3}>Order details</h3>
            <div className={s.orderDetailsSumm}>
              <p className={s.orderDetailsSummP}>Total</p>
              <h3 className={s.orderDetailsSummH3}>{calculateTotalPrice()}<span className={s.orderSymbol}>$</span></h3>
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
