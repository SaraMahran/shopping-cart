import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItemFromCart } from "../redux/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const totalItems = cart.length;

  return (
    <div>
      <h2>Shopping Cart ({totalItems} items)</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => handleRemoveFromCart(item.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
