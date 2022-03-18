import { NavLink } from "react-router-dom";
import "./Style/Nav.scss";

const Nav = () => {
  return (
    <>
      <div className="nav-container">
        <h1>MOIVE</h1>
        <ul>
          <li>
            <NavLink to="/">현재 상영작</NavLink>
          </li>
          <li>
            <NavLink to="/Upcoming">상영예정작</NavLink>
          </li>
          <li>
            <NavLink to="/Popular">인기 상영작</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
