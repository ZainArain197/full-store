import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { NavLink } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Hero from "./Hero/Hero";
import "./Slider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Home = () => {

  const toastd = () => {
    toast("Welcome To Contact Page")
  }

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
    
      <section className='home' id="Home">
        
        <div className='container flex'>
          <div className='left '>
            <div className='img' data-aos="fade-down-right">

              <img src="https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/222003F128012_4/dolce-and-gabbana-black-sorrento-sneakers.jpg" alt='' />
            
             
            </div>


          </div>
          <div className='right topMarign'>
            <h1 data-aos="fade-down-right">
              Dolce & Gabbana <br />
              Black Sneakers
            </h1>
            <div className='SocailIcon'>
              <i className='fab fa-facebook-f facebook'></i>
              <i className='fab fa-instagram instagram'></i>
              <i className='fab fa-twitter twitter'></i>
              <i className='fab fa-youtube youtube'></i>
              <i className='fab fa-pinterest pinterest'></i>
              <i className='fab fa-dribbble dribbble'></i>
            </div>
            <p data-aos="fade-down-right" style={{color :"black"}} >Find pieces from your favorite designers in Sale. Shop the latest additions. Come see what's new in Sale, featuring leading and emerging designer brands. Exclusive Collections. More Than 500 Designers. Fast Worldwide Shipping. Secure & Easy Checkout.</p>
            <NavLink to='/contact'  >  <button className='primary-btn' onClick={toastd}>Contact Us</button></NavLink>
          </div>
        </div>
 
      </section>

  

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> <img src="https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/222003F128012_4/dolce-and-gabbana-black-sorrento-sneakers.jpg" alt='' /></SwiperSlide>
        <SwiperSlide><img src="https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/222003F128019_1/dolce-and-gabbana-pink-portofino-sneakers.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://img.ssensemedia.com/images/f_auto,q_auto:best/221003F128024_1/dolce-and-gabbana-white-and-black-airmaster-sneakers.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://img.ssensemedia.com/images/f_auto,q_auto:best/221003F128024_4/dolce-and-gabbana-white-and-black-airmaster-sneakers.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/222720F127002_4/moschino-black-teddy-sock-sneakers.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://img.ssensemedia.com/images/f_auto,q_auto:best/222003F128004_1/dolce-and-gabbana-pink-sorrento-sneakers.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/222003F128003_1/dolce-and-gabbana-pink-daymaster-sneakers.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://img.ssensemedia.com/images/f_auto,q_auto:best/221003F128009_1/dolce-and-gabbana-white-and-black-daymaster-sneakers.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/221003F128001_1/dolce-and-gabbana-black-portofino-sneakers.jpg" alt="" /></SwiperSlide>
      </Swiper>


      <Hero/>
    </>
  )
}

export default Home
