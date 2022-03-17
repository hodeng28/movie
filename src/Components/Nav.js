import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div>
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
