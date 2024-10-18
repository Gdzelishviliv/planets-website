import React, { useState } from "react";
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

  const planetData = planetsData.find(
    (planet) => planet.name.toUpperCase() === planetName.toUpperCase()
  );

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

  let content: {
    title: string;
    text: string;
    source: string;
    img: string;
    miniImg: string;
  } = {
    title: "",
    text: "",
    source: "",
    img: "",
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
        className="planet-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="planet-img-container">
          <motion.img
            src={content.img}
            alt={planetName}
            className="main-image"
            initial={{ y: 50 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          />
          {selectedTab === "geology" && (
            <motion.img
              src={content.miniImg}
              className="surface-image"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            />
          )}
        </div>
        <motion.div
          className="info-overview"
          initial={{ x: -100 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab}
              className="information-about"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
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
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <motion.div
          initial={{ x: 50 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <h5>ROTATION TIME</h5>
          <motion.span
            initial={{ x: 75 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1.8 }}
          >
            {rotation}
          </motion.span>
        </motion.div>
        <motion.div
          initial={{ x: 50 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <h5>REVOLUTION TIME</h5>
          <motion.span
            initial={{ x: 75 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1.8 }}
          >
            {revolution}
          </motion.span>
        </motion.div>
        <motion.div
          initial={{ x: 50 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <h5>radius</h5>
          <motion.span
          initial={{x:75}}
          whileInView={{x:0}}
          transition={{duration:1.8}}
          >{radius}</motion.span>
        </motion.div>
        <motion.div
          initial={{ x: 50 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <h5>AVERAGE TEMP.</h5>
          <motion.span
            initial={{ x: 75 }}
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
