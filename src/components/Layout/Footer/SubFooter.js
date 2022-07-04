import { BsFillSuitHeartFill } from "react-icons/bs";
import { Icons } from "../../../DataFiles/Icons";

import Logo from "../../UI/Logo";
import classes from "./SubFooter.module.css";

const SubFooter = () => {
  return (
    <div>
      <div className={classes["sub-footer"]}>
        <div className={classes.logo}>
          <Logo />
        </div>
        <div>
          <div className={classes["first-block"]}>
            <h1>Fat Bro's</h1>
            {/* <button className={classes.button}>Follow</button> */}
            <a
              className={classes.button}
              href="https://www.instagram.com/fatbrosofficial/"
              target="_blank"
              rel="noreferrer"
            >
              Follow
            </a>
          </div>
          <div className={classes["second-block"]}>
            <p>
              Made in Hamburg <BsFillSuitHeartFill size="2vw" color="#008cba" />{" "}
              | Hamburg Street Food
            </p>
            <div className={classes["third-block"]}>
              {Icons.map((icon, index) => (
                <img src={icon} alt="Hot Dog" key={index} />
              ))}{" "}
              <span>DE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubFooter;
