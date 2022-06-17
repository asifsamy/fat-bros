import classes from "./MenuBar.module.css";

const MenuBar = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="!#">Full Menu</a>
        </li>
        <li>
          <a href="!#">Fat Dog</a>
        </li>
        <li>
          <a href="!#">Fat Falafel</a>
        </li>
        <li>
          <a href="!#">Fat Pommes</a>
        </li>
        <li>
          <a href="!#">Fat Köfte</a>
        </li>
        <li>
          <a href="!#">Kids</a>
        </li>
        <li>
          <a href="!#">Desserts</a>
        </li>
      </ul>
    </nav>
  );
};

export default MenuBar;
