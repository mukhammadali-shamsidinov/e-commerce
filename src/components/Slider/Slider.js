import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, HashNavigation } from 'swiper/modules';
import './Slider.css'
const Slider = () => {
  return (
    <>
    <Swiper
        spaceBetween={30}
        hashNavigation={{
          watchState: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, HashNavigation]}
        className="mySwiper"
      >
        <SwiperSlide data-hash="slide1">
            <img src="https://emeritus.org/wp-content/uploads/2022/08/Featured-Image-33.png" alt="" />
        </SwiperSlide>
        <SwiperSlide data-hash="slide2">
            <img src="https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2019Q1/product-manager/what-does-a-project-manager-do-header@2x.png" alt="" />
        </SwiperSlide>
        <SwiperSlide data-hash="slide3">
            <img src="https://cdn2.hubspot.net/hubfs/145335/product-market-fit.jpg" alt="" />
        </SwiperSlide>
      </Swiper></>
  )
}

export default Slider