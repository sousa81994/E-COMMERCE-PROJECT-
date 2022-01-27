import React from 'react';
import { useParams } from 'react-router-dom';
import ShopData from '../../../data/ShopData'
import Button from '../../../components/Button/Button'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addItem, delItem } from '../../../redux/actions/index'

const ProductDetail = () => {

  const [cartBtn, setCartBtn] = useState("Add to Cart")

  const productId = useParams();
  const productDetail = ShopData.filter((x) => x.id == productId.id)
  const product = productDetail[0];

  const dispatch = useDispatch()

  const handleCart = (product) => {
    if (cartBtn === "Add to Cart") {
      dispatch(addItem(product))
      setCartBtn("Remove From Cart")
    }
    else {
      dispatch(delItem(product))
      setCartBtn("Add to Cart")
    }
  }


  return (
    <>
      <div className="container my-5 py-3">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center mx-auto product">
            <img src={product.imageUrl} alt={product.name} height="400px" />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className='display-5 fw-bold'>{product.name}</h1>
            <hr />
            <h2 className='my-4'>€{product.price}</h2>
            <p className='lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium incidunt, nemo id quibusdam illo ab fugit tenetur! Incidunt asperiores nam minima, quia, veniam adipisci totam facere illo, voluptatem vel architecto!</p>
            <Button style={{ padding:'0px 10px'}} onClick={() => handleCart(product)} className="my-4">{cartBtn}</Button>
          </div>
        </div>
      </div>
    </>
  )
};

export default ProductDetail;
