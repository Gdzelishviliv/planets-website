import React, { useState } from "react";
import "../../styles/planets-styles/planets.css";
import "../../styles/button-styles/overview.css";
import planetsData from "../../data.json";
import { PlanetData } from "../types";

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
        <button onClick={() => setSelectedTab("overview")}>Overview</button>
        <button onClick={() => setSelectedTab("structure")}>Structure</button>
        <button onClick={() => setSelectedTab("geology")}>Surface</button>
      </div>
      <div className="planet-container">
        <div className="planet-img-container">
          <img src={content.img} alt={planetName} className="main-image"/>
          {selectedTab === "geology" && (
            <img src={content.miniImg} className="surface-image" />
          )}
        </div>
        <div>
          <div className="information-about">
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
          </div>
        </div>
      </div>
      <div>
        <div>
          <h5>ROTATION TIME</h5>
          <span>{rotation}</span>
        </div>
        <div>
          <h5>REVOLUTION TIME</h5>
          <span>{revolution}</span>
        </div>
        <div>
          <h5>radius</h5>
          <span>{radius}</span>
        </div>
        <div>
          <h5>AVERAGE TEMP.</h5>
          <span>{temperature}</span>
        </div>
      </div>
    </>
  );
};

export default Planet;
