import React from 'react'
import './Details.css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Navbar from '../../components/Navbar/Navbar';
 const Details = ({details,addToBasket}) => {
  return (
    <div className='details'>
      <Navbar />
      <div className="container mt-5 mb-5">
  <div className="row d-flex justify-content-center">
    <div className="col-md-10">
      <div className="card bg-dark">
        <div className="row">
          <div className="col-md-6">
            <div className="images p-3">
              <div className="text-center p-4">
                {" "}
                <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {details.slider_images?.map(item=>{
          return         <SwiperSlide key={item.id}>
          <img
                    id="main-image"
                    src={item}
              
                  />
          </SwiperSlide>
        })}

        
     
      </Swiper>
               {" "}
              </div>
             
            </div>
          </div>
          <div className="col-md-6">
            <div className="product p-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  {" "}
                  <i className="fa fa-long-arrow-left" />{" "}
                  <span className="ml-1">Back</span>{" "}
                </div>{" "}
                <i className="fa fa-shopping-cart text-muted" />
              </div>
              <div className="mt-4 mb-3">
                {" "}
                <span className="text-uppercase text-muted brand">{details.title}</span>
                <h5 className="text-uppercase"></h5>
                <div className="price d-flex flex-row align-items-center">
                  {" "}
                  <span className="act-price">${details.price / 2} &nbsp; </span>
                  <div className="ml-2">
                    {"  "}
                    <small className="dis-price">${details.price}</small>{" "}
                    <span>50% OFF</span>{" "}
                  </div>
                </div>
              </div>
              <p className="about">
              {details.descr}
              </p>
             
              <div className="cart mt-4 align-items-center">
                {" "}
                <button className="btn btn-danger text-uppercase mr-2 px-4"
                onClick={()=>addToBasket(details)}
                
                >
                  Add to cart
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Details