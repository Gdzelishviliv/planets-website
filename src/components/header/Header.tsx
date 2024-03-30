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
            <Link className="mercury-a" to="/Mercury">mercury</Link>
          </li>
          <li>
            <Link  className="venus-a"to="/Venus">venus</Link>
          </li>
          <li>
            <Link className="earth-a" to="/Earth">earth</Link>
          </li>
          <li>
            <Link className="mars-a" to="/Mars">mars</Link>
          </li>
          <li>
            <Link className="jupiter-a" to="/Jupiter">jupiter</Link>
          </li>
          <li>
            <Link className="saturn-a" to="/Saturn">saturn</Link>
          </li>
          <li>
            <Link className="uranus-a" to="/Uranus">uranus</Link>
          </li>
          <li>
            <Link className="neptune-a" to="/Neptune">neptune</Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Header;
