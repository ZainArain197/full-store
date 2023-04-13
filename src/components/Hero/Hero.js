import Aos from 'aos';
import React, { useEffect } from 'react';
import "./Hero.css"
import CardsData from '../CardsData';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
const Hero = () => {

  useEffect(() => {
    Aos.init();
  }, [])


  return (
    <>
      <section className='Services topMarign ' id="Pages">
        <div className='container'>
          <div className='heading'>
            <h3>YOUR DREAM SHOES</h3>
            <h1>Interactive Design's Offered By Dolce & Gabbana</h1>
          </div>

          <div className='contain grid topMarign'>
            {CardsData.map((val) => {
              return (
                <NavLink to={`/signup/`} style={{ textdecoration: "none" }} onClick={() => {
                  toast("Sign Up First")
                }} >
                  <div className='box' >
                    <div className='img' data-aos="flip-left" >
                      <img src={val.imgdata} alt='' />
                    </div>
                    <div className='text'>
                      <h2>{val.name}</h2>
                    </div>
                  </div>
                </NavLink>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
