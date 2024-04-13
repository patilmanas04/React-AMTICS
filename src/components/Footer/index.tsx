import "./style.css";
import Logo from "../../images/logo.png";
import Right_arrow from "../../images/right-arrow.svg";

const index = () => {
  return (
    // Footer section
    <>
      <footer>
        <div className="footer-content">
          {/* Logo */}
          <div className="logo">
            <img src={Logo} alt="" />
          </div>

          {/* Information */}
          <div className="info">
            <p>Member Secretary</p>
            <p>Admission Committee for Professional Courses</p>
            <p>
              Uka Tarsadia University Maliba Campus, Gopal Vidyanagar,
              Bardoli-Mahuva Road, Tarsadia - 394350
            </p>
            <p>Tal : Mahuva Dist: Surat Gujarat, INDIA</p>
            <p>Ph.: +91 - 1234567890</p>
            <p>
              Email :{" "}
              <a
                href="https://www.utu.ac.in/AMTICS/"
                target="_blank"
                className="amtics-website-link"
              >
                amtica@utu.ac.in
              </a>
            </p>
          </div>

          {/* Information Link content -1 */}
          <div className="information-1">
            <div className="top-header-1">
              <h2>Information Link</h2>
            </div>
            <div className="information-link-1">
              <a href="#">
                <img src={Right_arrow} />
                Link
              </a>
              <a href="#">
                <img src={ Right_arrow} />
                Link
              </a>
              <a href="#">
                <img src={ Right_arrow} />
                Link
              </a>
              <a href="#">
                <img src={ Right_arrow} />
                Link
              </a>
              <a href="#">
                <img src={ Right_arrow} />
                Link
              </a>
            </div>
          </div>

          {/* Information Link content-2 */}
          <div className="information-1">
            <div className="top-header-1">
              <h2>Information Link</h2>
            </div>
            <div className="information-link-1">
              <a href="#">
                <img src={ Right_arrow} />
                Link
              </a>
              <a href="#">
                <img src={ Right_arrow} />
                Link
              </a>
              <a href="#">
                <img src={ Right_arrow} />
                Link
              </a>
              <a href="#">
                <img src={ Right_arrow} />
                Link
              </a>
              <a href="#">
                <img src={ Right_arrow} />
                Link
              </a>
            </div>
          </div>
        </div>
        <div className="copy-right-line">
          <p> © 2024. All Rights Reserved by AMTICS</p>
        </div>
      </footer>
    </>
  );
};

export default index;
