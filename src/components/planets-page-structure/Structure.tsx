import React, { useState, useEffect } from "react";
import "../../styles/planets-styles/planets.css";
import "../../styles/button-styles/overview.css";
import planetsData from "../../data.json";
import { PlanetData } from "../types";
import { motion, AnimatePresence } from "framer-motion";

interface PlanetProps {
  planetName: string;
}

const Planet: React.FC<PlanetProps> = ({ planetName }) => {
  const [selectedTab, setSelectedTab] = useState("overview");
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const planetData = planetsData.find(
    (planet) => planet.name.toUpperCase() === planetName.toUpperCase()
  );

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!planetData) {
    return <div>Planet data not found!</div>;
  }

  const {
    name,
    overview,
    structure,
    geology,
    rotation,
    revolution,
    radius,
    temperature,
    images,
  } = planetData as PlanetData;

  let content = {
    title: name,
    text: overview.content,
    source: overview.source,
    img: images.planet,
    miniImg: "",
  };

  switch (selectedTab) {
    case "overview":
      content = {
        title: name,
        text: overview.content,
        source: overview.source,
        img: images.planet,
        miniImg: "",
      };
      break;
    case "structure":
      content = {
        title: name,
        text: structure.content,
        source: structure.source,
        img: images.internal,
        miniImg: "",
      };
      break;
    case "geology":
      content = {
        title: name,
        text: geology.content,
        source: geology.source,
        img: images.planet,
        miniImg: images.geology,
      };
      break;
    default:
      break;
  }

  const animationProps = {
    x: screenSize < 768 ? -50 : -100,
    y: screenSize < 768 ? 25 : 50,
    duration: screenSize < 768 ? 0.3 : 0.5,
  };

  return (
    <>
      <div className="overviev-container-mobile">
        <button
          className={`${planetName.toLowerCase()}-button`}
          onClick={() => setSelectedTab("overview")}
        >
          Overview
        </button>
        <button
          className={`${planetName.toLowerCase()}-button`}
          onClick={() => setSelectedTab("structure")}
        >
          Structure
        </button>
        <button
          className={`${planetName.toLowerCase()}-button`}
          onClick={() => setSelectedTab("geology")}
        >
          Surface
        </button>
      </div>
      <motion.div
        key={location.pathname}
        className="planet-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: animationProps.duration }}
      >
        <div className="planet-img-container">
          <motion.img
            src={content.img}
            alt={planetName}
            className="main-image"
            initial={{ y: animationProps.y }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: animationProps.duration }}
          />
          {selectedTab === "geology" && (
            <motion.img
              src={content.miniImg}
              className="surface-image"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: animationProps.duration }}
            />
          )}
        </div>
        <motion.div
          className="info-overview"
          initial={{ x: animationProps.x }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: animationProps.duration }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab}
              className="information-about"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: animationProps.duration }}
            >
              <h1>{content.title}</h1>
              <p>{content.text}</p>
              <span>
                source:{" "}
                <a
                  href={content.source}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikipedia
                </a>
              </span>
            </motion.div>
          </AnimatePresence>
          <div className="overviev-container">
            <motion.button
              initial={{ y: 250 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1 }}
              className={`${planetName.toLowerCase()}-buttons`}
              onClick={() => setSelectedTab("overview")}
            >
              Overview
            </motion.button>
            <motion.button
              initial={{ y: 250 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1.3 }}
              className={`${planetName.toLowerCase()}-buttons`}
              onClick={() => setSelectedTab("structure")}
            >
              Internal Structure
            </motion.button>
            <motion.button
              initial={{ y: 250 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1.8 }}
              className={`${planetName.toLowerCase()}-buttons`}
              onClick={() => setSelectedTab("geology")}
            >
              Surface Geology
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        className="planet-info-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <motion.div
          initial={{ x: animationProps.x }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <h5>ROTATION TIME</h5>
          <motion.span
            initial={{ x: animationProps.x }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1.8 }}
          >
            {rotation}
          </motion.span>
        </motion.div>
        <motion.div
          initial={{ x: animationProps.x }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <h5>REVOLUTION TIME</h5>
          <motion.span
            initial={{ x: animationProps.x }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1.8 }}
          >
            {revolution}
          </motion.span>
        </motion.div>
        <motion.div
          initial={{ x: animationProps.x }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <h5>RADIUS</h5>
          <motion.span
            initial={{ x: animationProps.x }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1.8 }}
          >
            {radius}
          </motion.span>
        </motion.div>
        <motion.div
          initial={{ x: animationProps.x }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <h5>AVERAGE TEMP.</h5>
          <motion.span
            initial={{ x: animationProps.x }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1.8 }}
          >
            {temperature}
          </motion.span>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Planet;
