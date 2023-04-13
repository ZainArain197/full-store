import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
const ContactUs = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();


    emailjs.sendForm('service_gtf99wi', 'template_tncysgk', form.current, 'v4uBlvwe9nQrMvHKV')
      .then((result) => {
        console.log(result.text);

      }, (error) => {
        console.log(error.text);
        toast("Email Not Sent ")
      });

    toast("Email Sent Successfully");
    // console.log(form.current);
    form.current.reset();
    // to reset input fields
  }

  return (
    <>
      <section className="contact-sec sec-pad">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="contact-detail">
                <h1 className="section-title">Contact us</h1>
                <ul className="contact-ul">
                  <li>
                    <i className="fa fa-location-dot" /> Pakistan Punjab Faisalabad
                  </li>
                  <li>
                    <i className="fa fa-phone" />
                    <a href="tel:08510004495">
                      <b>+923016047725</b>
                    </a>
                    ,
                    <a href="tel:08510005495">
                      <b>+923016047725</b>
                    </a>
                  </li>
                  <li>
                    <i className="fa-solid fa-envelope" />
                    <a href="mailto:pardeepkumar4bjp@gmail.com">
                      <b> mzain4307@gmail.com</b>
                    </a>
                  </li>
                </ul>
                <span>
                  <a href="#" className="fb">
                    <i className="fa-brands fa-facebook" />
                  </a>
                  <a href="#" className="insta">
                    <i className="fa-brands fa-instagram" />
                  </a>
                  <a href="#" className="twitter">
                    <i className="fa-brands fa-twitter" />
                  </a>
                </span>
              </div>
            </div>
            <div className="col-md-6">
              <form ref={form} onSubmit={sendEmail} className="contFrm" method="POST">
                <div className="row">
                  <div className="col-sm-6">
                    <input
                      type="text"
                      name="user_name"
                      placeholder="Your Name"
                      className="inptFld"
                      required=""
                    />
                  </div>
                  <div className="col-sm-6">
                    <input
                      type="email"
                      name="user_email"
                      placeholder="Email Address"
                      className="inptFld"
                      required=""
                    />
                  </div>
                  <div className="col-sm-6">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      className="inptFld"
                      required=""
                    />
                  </div>
                  <div className="col-sm-6">
                    <input
                      type="text"
                      name="sub"
                      placeholder="Subject"
                      className="inptFld"
                      required=""
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      className="inptFld"
                      rows=""
                      cols=""
                      placeholder="Your Message..."
                      required=""
                      defaultValue={""}
                      name="message"
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="submit"
                      name="Send"
                      value="Send"
                      className="inptBtn"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 20 }}>
            <p> Thanks For Visiting Our Store</p>
          </div>
        </div>
      </section>

    </>
  )
}

export default ContactUs
