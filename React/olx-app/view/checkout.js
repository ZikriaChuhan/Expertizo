import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart, increaseQuantity, decreaseQuantity } from "../../store/cartSlice";
import './checkout.css'; 


function Checkout() {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cartReducer.cart);
  
    const removeItem = (itemId) => {
      // Dispatch an action to remove the item from the cart
      dispatch(removeFromCart(itemId));
    };


    const increaseItemQuantity = (itemId) => {
      // Dispatch an action to increase the quantity of the item
      dispatch(increaseQuantity(itemId));
    };
  
    const decreaseItemQuantity = (itemId) => {
      // Ensure quantity doesn't go below 1 before dispatching the action
      if (cart.find(item => item.id === itemId)?.quantity > 1) {
        // Dispatch an action to decrease the quantity of the item
        dispatch(decreaseQuantity(itemId));
      }
    };

    const totalPrice = cart.reduce(
      (accumulator, item) => accumulator + item.price * item.quantity,
      0
    );
  
    return (
      <>
       <div className="checot">
      
        <div className="col-md-6 car23t">
          <div className="title">
            <div className="row">
              <div className="col">
                <h4><b>Shopping Cart</b></h4>
              </div>
              <div className="col align-self-center text-right text-muted">{cart.length} items</div>
            </div>
          </div>

          {cart.length > 0 ? (
        <ul className="shopping-cart-items">
          {cart.map((item) => (
           <li className="clearfix" key={item.id}>
         
           <div className="row border-top border-bottom">
            <div className="row main align-items-center">
              <div className="col-2"><img className="img-fluid"  src={item.imageUrl} alt={item.title} /></div>
              <div className="col">
                <div className="row text-muted">{item.title}</div>
                <div className="row">Cotton T-shirt</div>
              </div>
              <div className="col">
                <a onClick={() => decreaseItemQuantity(item.id)}>-</a><a className="border">{item.quantity}</a><a onClick={() => increaseItemQuantity(item.id)}>+</a>
              </div>
              <div className="col">Rs. {item.price*item.quantity}<span className="close" onClick={() => removeItem(item.id)}>&#10005;</span></div>
            </div>
          </div>
         </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}

        
        
        </div>
        <div className="col-md-4 summary12">
          <div><h5><b>Summary</b></h5></div>
          <hr />
          <div className="row">
            <div className="col" style={{ paddingLeft: 0 }}>ITEMS {cart.length}</div>
            <div className="col text-right">Rs {totalPrice}</div>
          </div>
          <form>
            <p>SHIPPING</p>
            <select className="delivery">
              <option className="text-muted">Standard-Delivery- RS 100.00</option>
            </select>
            <p>GIVE CODE</p>
            <input className="input32" id="code" placeholder="Enter your code" />
          </form>
          <div className="row" style={{ borderTop: '1px solid rgba(0,0,0,.1)', padding: '2vh 0' }}>
            <div className="col">TOTAL PRICE</div>
            <div className="col text-right">RS {totalPrice.toFixed(2)}</div>
          </div>
          <button className="btn">CHECKOUT</button>
        </div>
      
    </div>





       
      </>
    );
  }
  
  export default Checkout;