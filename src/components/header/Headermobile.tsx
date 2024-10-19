import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./header.css";
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
    setShowOptions((prev) => !prev);
  };

  return (
    <header>
      <div className="header-container-mobile">
        <ul>
          <li className="home-btn-mobile">
            <Link to="/">the planets</Link>
          </li>
        </ul>
        <motion.button
          onClick={toggleOptions}
          initial={{ rotate: 0 }}
          // animate={{ rotate: showOptions ? 90 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            backgroundColor: "transparent",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="toggle-btn-container">
            <motion.div
              className="toggle-btn"
              animate={{
                rotate: showOptions ? 45 : 0,
                y: showOptions ? 7 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="toggle-btn"
              animate={{
                opacity: showOptions ? 0 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="toggle-btn"
              animate={{
                rotate: showOptions ? -45 : 0,
                y: showOptions ? -7 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.button>
      </div>
      <AnimatePresence>
        {showOptions && (
          <motion.div
            className="options-card"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <ul>
              {[
                { img: mercDisc, name: "mercury", path: "/Mercury" },
                { img: venusDisc, name: "venus", path: "/Venus" },
                { img: earthDisc, name: "earth", path: "/Earth" },
                { img: marsDisc, name: "mars", path: "/Mars" },
                { img: jupiterDisc, name: "jupiter", path: "/Jupiter" },
                { img: saturnDisc, name: "saturn", path: "/Saturn" },
                { img: uranusDisc, name: "uranus", path: "/Uranus" },
                { img: neptuneDisc, name: "neptune", path: "/Neptune" },
              ].map((planet, index) => (
                <Link to={planet.path} className="mobile-burger-menu">
                  <li key={index}>
                    <div>
                      <img src={planet.img} alt={`${planet.name}-icon`} />
                      <Link to={planet.path}>{planet.name}</Link>
                    </div>
                    <img src={arrow} alt="arrow-icon" />
                  </li>
                </Link>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Headermobile;
