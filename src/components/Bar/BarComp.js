import { Fragment } from "react";
import classes from "./BarComp.module.css";
import BarInfo from "./BarInfo";
import MenuCart from "../../assets/speisekarte.jpg";

const BarComp = () => {
  return (
    <Fragment>
      <h2 className={classes.heading}>
        Fat Bro's <span className={classes["heading-span"]}>Bar</span> - Hamburg
        Strip
      </h2>
      <section className={classes.container}>
        <div className={classes.info}>
          <BarInfo />
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2370.0825530115662!2d10.004181015665557!3d53.5562937800236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18ee08ee0bd8b%3A0x7530aee95803fb6b!2sBar%20Hamburg!5e0!3m2!1sen!2sde!4v1656783548201!5m2!1sen!2sde"
          className={classes["map-frame"]}
          title="bar map"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      <h2 className={classes.heading}>
        Die <span className={classes["heading-span"]}>Speisekarte</span>
      </h2>
      <div className={classes["menu-cart"]}>
        <img src={MenuCart} alt="All Menu" />
      </div>
    </Fragment>
  );
};

export default BarComp;
