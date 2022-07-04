import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <NavLink activeClassName={classes.active} to="/home">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/menü">
            Menü
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/über-uns">
            Über uns
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/standort">
            Standort
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/bar">
            Bar
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/jobs">
            Jobs
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/kontakt">
            Kontakt
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
