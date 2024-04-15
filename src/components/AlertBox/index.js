import Happy from "../../images/happy.png";
import close from "../../images/close.png";
import "./style.css";
import React, { useState } from 'react';


const AlertBox = () => {
  const [Hide, setHide] = useState(true);

  const handleClick = () => {
    setHide(false);
  };

  return (
    <div style={{ display: Hide ? 'block' : 'none' }}>
       <div className="fully_body">
        <div className="main_box">
          <div className="close_icon" >
            <img
              src={close}
              alt=""
              className="cross"
              onClick={handleClick}
            />
          </div>

          <div className="reaction_and_text">
            <img src={Happy} alt="Oops!! Reaction not Found " />
            <h3>Congratulation !!</h3>
          </div>

          <div className="description">
            <h2>You are eligible </h2>
            <span>For</span>
            <p>
              Asha M. Tarsadia Institute of Computer Science and Technology .
            </p>
          </div>
          <div class="container">
            <div class="left-line"></div>
            <div class="middle-name">
              <b>UTU</b>
            </div>
            <div class="right-line"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertBox;
