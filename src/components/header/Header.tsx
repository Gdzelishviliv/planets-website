import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./header.css";

const Header = () => {
  return (
    <motion.div
      className="header-container"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ul>
        <li className="home-btn">
          <Link to="/">the planets</Link>
        </li>
        <div className="planet-links">
          {[
            { name: "mercury", path: "/Mercury" },
            { name: "venus", path: "/Venus" },
            { name: "earth", path: "/Earth" },
            { name: "mars", path: "/Mars" },
            { name: "jupiter", path: "/Jupiter" },
            { name: "saturn", path: "/Saturn" },
            { name: "uranus", path: "/Uranus" },
            { name: "neptune", path: "/Neptune" },
          ].map((planet, index) => (
            <motion.li
              key={planet.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link className={`${planet.name}-a`} to={planet.path}>
                {planet.name}
              </Link>
            </motion.li>
          ))}
        </div>
      </ul>
    </motion.div>
  );
};

export default Header;
