import logoImage from "../../assets/fat-bros.jpg";
import classes from "./Logo.module.css";

const Logo = (props) => {
  return (
    <a href="!#">
      <img className={classes.logo} src={logoImage} alt="A logo of Fat-bros" />
    </a>
  );
};

export default Logo;
