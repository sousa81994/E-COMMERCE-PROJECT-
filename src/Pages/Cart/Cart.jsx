import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {delItem} from '../../redux/actions/index'
import Button from '../../components/Button/Button'


const Cart = () => {

  const state = useSelector((state)=> state.addItem);
  const dispatch = useDispatch();

  const handleClose = (item) => {
    dispatch(delItem(item))
  }



  const cartItems = (cartItem) => {
    return (
        <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
          <div className="container py-4">
            <button onClick={() => handleClose(cartItem)} className="btn-close float-end" aria-label='Close'></button>
              <div className="row justify-content-center">
                <div className="col-md-4">
                  <img src={cartItem.imageUrl} alt={cartItem.name} height="200px" width="180px" />
                </div>
                <div className="col-md-4">
                  <h3 style={{color: '#5F021F'}}>{cartItem.name}</h3>
                  <p className='lead fw-bold'>€{cartItem.price}</p>
                  <p className='lead fw-bold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                  <p className='lead fw-bold'>{cartItem.color}</p>
                </div>
              </div>
          </div>
        </div>
    );
  }

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5" >
          <div className="container py-4">
            <div className="row">
              <h3>Your Cart Is Empty</h3>
            </div>
            <div className="container py-4 my-5">
              <div className="row">
            <NavLink to='/products'><Button>Go Back To Our Shop</Button></NavLink>
            </div>
            </div>
          </div>
      </div>
    );
  }

  const button = () => {
    return (
      <div className="container">
        <div className="row">
          <NavLink to='/checkout'className='mb-5 w-25' ><Button style={{width: '250px'}}>Proceed to Checkout</Button></NavLink>
        </div>
      </div>
    );
  }


  return (
  <div>
        {state.length === 0 && emptyCart()}
        {state.length !== 0 && state.map(cartItems)}
        {state.length !== 0 && button()}
  </div>
)
};

export default Cart;


