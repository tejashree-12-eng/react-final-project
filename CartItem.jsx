import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
} from "./CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    state => state.cart.cartItems
  );

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        cartItems.map(item => (
          <div className="cart-item" key={item.id}>
            <img
              src={item.image}
              alt={item.name}
              width="100"
            />

            <h3>{item.name}</h3>
            <p>Unit Price: ₹{item.price}</p>

            <button
              onClick={() =>
                dispatch(decreaseQuantity(item.id))
              }
            >
              -
            </button>

            <span> {item.quantity} </span>

            <button
              onClick={() =>
                dispatch(increaseQuantity(item.id))
              }
            >
              +
            </button>

            <p>
              Total: ₹{item.price * item.quantity}
            </p>

            <button
              onClick={() =>
                dispatch(removeFromCart(item.id))
              }
            >
              Delete
            </button>
          </div>
        ))
      )}

      <h2>Grand Total: ₹{totalAmount}</h2>

      <button
        onClick={() => alert("Checkout Coming Soon!")}
      >
        Checkout
      </button>

      <br /><br />

      <a href="#plants">Continue Shopping</a>
    </div>
  );
}

export default CartItem;
