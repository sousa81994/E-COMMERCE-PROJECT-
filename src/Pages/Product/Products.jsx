import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ShopData from '../../data/ShopData'

const Products = () => {

    const [filter, setFilter] = useState(ShopData);

    const filterProduct = (cat) => {
        const updatedList = ShopData.filter((x) => x.cat === cat);
        setFilter(updatedList);
    }



    return (
        <div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Product</h1>
                        <hr />
                    </div>
                </div>
                <div className="container">
                <div className="row ">
                    <div className="buttons d-flex justify-content-center mb-5 pb-5">
                        <button className="btn btn-outline-dark me-2" onClick={() => setFilter(ShopData)}>All</button>                     <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("Hats")}>Hats</button>
                        <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("Sneakers")}>Sneakers</button>
                        <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("Jacket")}>Jacket</button>
                        <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("Women")}>Women</button>
                        <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("Men")}>Men</button>
                    </div>
                    {filter.map((item) => {
                        return (
                            <>
                                <div className="container-fluid" style={{flex: '1', justifyContent: 'center'}}>
                                    <div className="row">
                                        <div className="">
                                        <div className="card my-5 py-4" key={item.id} style={{ width: "18rem" }}>
                                            <img src={item.imageUrl} className="card-img-top" alt={item.name} style={{ height: "300px" }} />
                                            <div className="card-body text">
                                                <h5 className="card-title">{item.name}</h5>
                                                <p className="lead">€{item.price}.</p>
                                                <NavLink to={`/products/${item.id}`} className="btn btn-outline-secondary">Buy Now</NavLink>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
            </div>
        </div>
    )
};

export default Products;
