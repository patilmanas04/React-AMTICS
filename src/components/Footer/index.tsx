import React from "react";
import './style.css'
import Logo from "../../images/logo.png";
import Arrow from "../../images/right-arrow.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="outer">
          <div className="left-content">
            <div className="AMTICS-logo">
              
              <div className="circle">
              <img src={Logo} id="logo-img" />
              </div>
            </div>

            <div className="AMTICS-info">
              <p>Member Secretary</p>
              <p>Admission Committee for Professional Courses</p>
              <p>
                Uka Tarsadia University Maliba Campus, Gopal Vidyanagar,
                Bardoli-Mahuva Road, Tarsadi - 394 350.{" "}
              </p>
              <p>Tal: Mahuva Dist: Surat Gujarat, INDIA</p>

              <p>Ph.: <span>+91-0000000000</span></p>
              <p>
                Email:{" "}
                <a
                  href="https://www.utu.ac.in/AMTICS/"
                  target="_blank"
                  className="Amtics-contact"
                >
                  amtics@utu.ac.in
                </a>
              </p>
            </div>
          </div>

          <div className="link-info-middle">
            <h3>Information Links</h3>
            <div className="links">
              <a href="#">
                <img src={Arrow} id="right-arrow" /> Link 1
              </a>
              <a href="#">
                <img src={Arrow} id="right-arrow" /> Link 2
              </a>
              <a href="#">
                <img src={Arrow} id="right-arrow" /> Link 3
              </a>
              <a href="#">
                <img src={Arrow} id="right-arrow" /> Link 4
              </a>
              <a href="#">
                <img src={Arrow} id="right-arrow" /> Link 5
              </a>
              <a href="#">
                <img src={Arrow} id="right-arrow" /> Link 6
              </a>
            </div>
          </div>

          <div className="link-info-right">
            <h3>Information Links</h3>
            <div className="links">
              <a href="#">
                <img src={Arrow} id="right-arrow" /> Link 1
              </a>
              <a href="#">
                <img src={Arrow} id="right-arrow" /> Link 2
              </a>
              <a href="#">
                <img src={Arrow} id="right-arrow" /> Link 3
              </a>
              <a href="#">
                <img src={Arrow} id="right-arrow" /> Link 4
              </a>
              <a href="#">
                <img src={Arrow} id="right-arrow" /> Link 5
              </a>
              <a href="#">
                <img src={Arrow} id="right-arrow" /> Link 6
              </a>
            </div>
          </div>
        </div>
        <div className="all-rights-reserved">
          <p>
            © 2024 All right reserved by <b>AMTICS</b>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
