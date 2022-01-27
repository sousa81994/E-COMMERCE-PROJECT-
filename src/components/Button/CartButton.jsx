import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from './Button'
import { useSelector } from 'react-redux';


const CartButton = () => {

    const state = useSelector((state)=> state.addItem)    

    return (

        <>

            <NavLink to="/cart" className="btn btn-outlined-secondary ms-2">
                <Button><span className="fa fa-shopping-cart me-1"></span> Cart({state.length})</Button>
            </NavLink>


        </>

    )
};

export default CartButton;
