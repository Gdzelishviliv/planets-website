import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="header-container">
      <ul>
        <li className="home-btn">
          <Link to="/">the planets</Link>
        </li>
        <div className="planet-links">
          <li>
            <Link to="/Mercury">mercury</Link>
          </li>
          <li>
            <Link to="/Venus">venus</Link>
          </li>
          <li>
            <Link to="/Earth">earth</Link>
          </li>
          <li>
            <Link to="/Mars">mars</Link>
          </li>
          <li>
            <Link to="/Jupiter">jupiter</Link>
          </li>
          <li>
            <Link to="/Saturn">saturn</Link>
          </li>
          <li>
            <Link to="/Uranus">uranus</Link>
          </li>
          <li>
            <Link to="/Neptune">neptune</Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Header;
