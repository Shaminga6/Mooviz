import { Link  } from 'react-router-dom';


import logo from "../assets/logo-white.png";
import "../style/navbar.css";

const NavBar = () => {

  return (
    <div>
      <nav>
        <div className="navContent">
          <img className="logo" src={logo} alt="" />

          <ul>
          <li><Link id='linkVisit' to="/home">Home</Link></li>
            <li><Link id='linkVisit' to="/popular">popular movies</Link></li>
            <li><Link id='linkVisit' to="/kids">Kids</Link></li>
            <li><Link id='linkVisit' to="/drama">Drama</Link></li>
            <li><Link id='linkVisit' to="/science">Science fiction</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
