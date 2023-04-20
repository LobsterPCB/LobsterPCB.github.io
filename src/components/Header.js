import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div>
        <ul>
          <li>
            <NavLink to="/" activeStyle>
              Project
            </NavLink>
          </li>
          <li>
            <NavLink to="/goals" activeStyle>
              Goals
            </NavLink>
          </li>
          <li>
            <NavLink to="/features" activeStyle>
              Features
            </NavLink>
          </li>
          <li>
            <NavLink to="/team" activeStyle>
              Team
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeStyle>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog#" activeStyle>
              Blog
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
