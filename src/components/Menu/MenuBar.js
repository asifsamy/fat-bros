import classes from "./MenuBar.module.css";

const MenuBar = ({ allCategories, filter }) => {
  return (
    <nav className={classes.nav}>
      <ul>
        {allCategories.map((category, i) => (
          <li key={i} onClick={() => filter(category)}>
            {category}
          </li>
        ))}
        {/* <li>
          <a href="!#">Hot Dog</a>
        </li>
        <li>
          <a href="!#">Falafel</a>
        </li>
        <li>
          <a href="!#">Pommes</a>
        </li>
        <li>
          <a href="!#">Köfte</a>
        </li>
        <li>
          <a href="!#">Kinder</a>
        </li>
        <li>
          <a href="!#">Dessert</a>
        </li> */}
      </ul>
    </nav>
  );
};

export default MenuBar;
