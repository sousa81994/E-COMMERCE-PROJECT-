import React from 'react';

const Slider = () => {
  return (
    <div>

<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="5000">
      <img src="https://cdn.shopify.com/s/files/1/0756/8925/products/BUF-6606-BK_2000x.jpg?v=1600873316" className="d-block w-100" alt="Hats" height='700px'/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://www.freebuyer.ru/images/202010/source_img/230275/2020-moncler-down-jackets-for-women--230275-cheap-men.jpg" className="d-block w-100" alt="Jackets" height='700px'/>
    </div>
    <div className="carousel-item">
      <img src="https://things-niigata.jp/wp-content/uploads/2020/11/thisman_02.jpg" className="d-block w-100" alt="Sneakers" height='700px'/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>



    </div>)
};

export default Slider;
