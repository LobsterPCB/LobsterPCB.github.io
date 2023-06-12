import { NavLink } from "react-router-dom";

const Header = () => {
  function toggleMobileNavbar() {
    var nav = document.getElementById("navbarID");
    if (nav.className === "navbar") {
      nav.className += " responsive";
    } else {
      nav.className = "navbar";
    }
  }

  function closeMobileNavbar() {
    document.getElementById("navbarID").className = "navbar";
  }

  return (
    <header>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <div class="navbar" id="navbarID">
        <NavLink to="/" activeStyle onClick={closeMobileNavbar} id="home">
          <img src={require("../images/Logo_No_Text.png")}></img>
          <p>Home</p>
        </NavLink>
        <NavLink to="/product" activeStyle onClick={closeMobileNavbar}>
          Product
        </NavLink>
        <NavLink to="/goals" activeStyle onClick={closeMobileNavbar}>
          Goals
        </NavLink>
        <NavLink to="/team" activeStyle onClick={closeMobileNavbar}>
          Team
        </NavLink>
        <NavLink to="/blog" activeStyle onClick={closeMobileNavbar}>
          Blog
        </NavLink>
        <a href="javascript:void(0);" class="icon" onClick={toggleMobileNavbar}>
          <i class="fa fa-bars"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
