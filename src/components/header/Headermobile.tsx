import { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import mobileImg from "../../assets/images/button-icons/mobile-header-icn.svg";
import mercDisc from "../../assets/images/ul-circles/mercDisc.png";
import venusDisc from "../../assets/images/ul-circles/venusDisc.png";
import earthDisc from "../../assets/images/ul-circles/earthDisc.png";
import marsDisc from "../../assets/images/ul-circles/marsDisc.png";
import jupiterDisc from "../../assets/images/ul-circles/jupiterDisc.png";
import saturnDisc from "../../assets/images/ul-circles/saturnDisc.png";
import uranusDisc from "../../assets/images/ul-circles/uranusDisc.png";
import neptuneDisc from "../../assets/images/ul-circles/neptuneDisc.png";
import arrow from "../../assets/images/ul-circles/arrow.png";

const Headermobile = () => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <header>
      <div className="header-container-mobile">
        <ul>
          <li className="home-btn-mobile">
            <Link to="/">the planets</Link>
          </li>
        </ul>
        <button onClick={toggleOptions}>
          <img src={mobileImg} alt="options-icn" />
        </button>
      </div>
      {showOptions && (
        <div className="options-card">
          <ul>
            <li>
              <div>
                <img src={mercDisc} alt="" />
                <Link to="/Mercury">mercury</Link>
              </div>
              <img src={arrow} alt="" />
            </li>
            <li>
              <div>
                <img src={venusDisc} alt="" />
                <Link to="/Venus">venus</Link>
              </div>
              <img src={arrow} alt="" />
            </li>
            <li>
              <div>
                <img src={earthDisc} alt="" />
                <Link to="/Earth">earth</Link>
              </div>
              <img src={arrow} alt="" />
            </li>
            <li>
              <div>
                <img src={marsDisc} alt="" />
                <Link to="/Mars">mars</Link>
              </div>
              <img src={arrow} alt="" />
            </li>
            <li>
              <div>
                <img src={jupiterDisc} alt="" />
                <Link to="/Jupiter">jupiter</Link>
              </div>
              <img src={arrow} alt="" />
            </li>
            <li>
              <div>
                <img src={saturnDisc} alt="" />
                <Link to="/Saturn">saturn</Link>
              </div>
              <img src={arrow} alt="" />
            </li>
            <li>
              <div>
                <img src={uranusDisc} alt="" />
                <Link to="/Uranus">uranus</Link>
              </div>
              <img src={arrow} alt="" />
            </li>
            <li>
              <div>
                <img src={neptuneDisc} alt="" />
                <Link to="/Neptune">neptune</Link>
              </div>
              <img src={arrow} alt="" />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Headermobile;
