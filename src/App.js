
import Header from "./components/Header";
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import slide_image_1 from './components/images/img_1.jpg';
import slide_image_2 from './components/images/img_2.jpg';
import slide_image_3 from './components/images/img_3.jpg';
import slide_image_4 from './components/images/img_4.jpg';
import slide_image_5 from './components/images/img_5.jpg';

import { BiArrowBack } from "react-icons/bi";
import Title from "./components/Title";

function App() {
    return (
        <>
            <Header />
            <Title />


            <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
      <SwiperSlide>
  <div className="slideContent">
    <img src={slide_image_1} alt="slide_image"/>
    <div className="bottomText">Modern Kitchen Utensils</div>
  </div>
</SwiperSlide>

        <SwiperSlide>
  <div className="slideContent">
    <img src={slide_image_2} alt="slide_image"/>
    <div className="bottomText">Modern Kitchen Utensils</div>
  </div>
</SwiperSlide>
<SwiperSlide>
  <div className="slideContent">
    <img src={slide_image_3} alt="slide_image"/>
    <div className="bottomText">Modern Kitchen Utensils</div>
  </div>
</SwiperSlide>
<SwiperSlide>
  <div className="slideContent">
    <img src={slide_image_4} alt="slide_image"/>
    <div className="bottomText">Modern Kitchen Utensils</div>
  </div>
</SwiperSlide>
<SwiperSlide>
  <div className="slideContent">
    <img src={slide_image_5} alt="slide_image"/>
    <div className="bottomText">Modern Kitchen Utensils</div>
  </div>
</SwiperSlide>
      

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <BiArrowBack name="arrow-back-outline" />
          </div>
          <div className="swiper-button-next slider-arrow">
          <BiArrowBack name="arrow-back-outline" style={{transform: "rotate(180deg)" }} />
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
      
        </>
    );
}

export default App;