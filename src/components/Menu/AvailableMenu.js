import classes from "./AvailableMenu.module.css";
import MenuItem from "./MenuItem";
import { MenuData } from "./MenuDataset";

const AvailableMenu = () => {
  return (
    <section className={classes["menu-area"]}>
      <ul className={classes["grid-container"]}>
        {MenuData.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </ul>
    </section>
  );
};

export default AvailableMenu;
