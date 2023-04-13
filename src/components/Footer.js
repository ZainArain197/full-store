import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="footer-section">
  <div className="container">
    <div className="footer-cta pt-5 pb-5">
      <div className="row">
        <div className="col-xl-4 col-md-4 mb-30">
          <div className="single-cta">
            <i className="fas fa-map-marker-alt" />
            <div className="cta-text">
              <h4>Find us</h4>
              <span><Link className="text-decoration-none text-light">https://goo.gl/maps/EP7KZGs959nzah9t5</Link></span>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-4 mb-30">
          <div className="single-cta">
            <i className="fas fa-phone" />
            <div className="cta-text">
              <h4>Call us</h4>
              <span>+923016047725</span>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-4 mb-30">
          <div className="single-cta">
            <i className="far fa-envelope-open" />
            <div className="cta-text">
              <h4>Mail us</h4>
              <span>mzain4307@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-content pt-5 pb-5">
      <div className="row">
        <div className="col-xl-4 col-lg-4 mb-50">
          <div className="footer-widget">
            <div className="footer-logo">
              <a href="index.html">
                <img
                  src="./logoo.png"
                  className="img-fluid"
                  alt="logo"
                />
              </a>
            </div>
            <div className="footer-text">
              <p>
                Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed
                do eiusmod tempor incididuntut consec tetur adipisicing
                elit,Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className="footer-social-icon">
              <span>Follow us</span>
              <a href="#">
                <i className="fab fa-facebook-f facebook-bg" />
              </a>
              <a href="#">
                <i className="fab fa-twitter twitter-bg" />
              </a>
              <a href="#">
                <i className="fab fa-google-plus-g google-bg" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
          <div className="footer-widget">
            <div className="footer-widget-heading">
              <h3>Useful Links</h3>
            </div>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>

              <li>
                <a href="#">Products</a>
              </li>
              <NavLink to='/contact' >  <li>
                <a href="#">Contact us</a>
              </li>
              </NavLink>

              <NavLink to='/Cards' >  <li>
                <a href="#">Latest Shoes</a>
              </li>
              </NavLink>
             
            </ul>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
          <div className="footer-widget">
            <div className="footer-widget-heading">
              <h3>GET IN TOUCH</h3>
            </div>
            <div className="footer-text mb-25">
              <p>
                Don’t miss to subscribe to our new feeds, kindly fill the form
                below.
              </p>
            </div>
            <div className="subscribe-form">
              <form action="#">
                <input type="text" placeholder="Email Address" />
                <button>
                  <i className="fab fa-telegram-plane" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</footer>

    </>
  )
}

export default Footer
