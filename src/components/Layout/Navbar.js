import classes from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a className={classes.active} href="!#">
            Home
          </a>
        </li>
        <li>
          <a href="!#">Menu</a>
        </li>
        <li>
          <a href="!#">Our Story</a>
        </li>
        <li>
          <a href="!#">Locations</a>
        </li>
        <li>
          <a href="!#">Bars</a>
        </li>
        <li>
          <a href="!#">Jobs</a>
        </li>
        <li>
          <a href="!#">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
