import { Fragment, useState } from "react";
import MenuBar from "../Menu/MenuBar";
import classes from "./AvailableMenu.module.css";
import MenuItem from "./MenuItem";
import { MenuData } from "../../DataFiles/MenuDataset";

const allCategories = [
  "Volles Menü",
  ...new Set(MenuData.map((menu) => menu.category)),
];

const AvailableMenu = () => {
  const [menuItems, setMenuItems] = useState(MenuData);

  const filterMenu = (value) => {
    if (value === "Volles Menü") {
      setMenuItems(MenuData);
      return;
    }

    const filteredMenu = MenuData.filter((menu) => menu.category === value);
    setMenuItems(filteredMenu);
  };

  return (
    <Fragment>
      <MenuBar allCategories={allCategories} filter={filterMenu} />
      <div className={classes["home"]}>
        <h1>Get Dirty</h1>
        <div className={classes["border"]}></div>
      </div>
      <div className={classes["menu-area"]}>
        <ul className={classes["grid-container"]}>
          {menuItems.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default AvailableMenu;
