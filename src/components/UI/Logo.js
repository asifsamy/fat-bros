import { Link } from "react-router-dom";
import logoImage from "../../assets/fat-bros.jpg";
import classes from "./Logo.module.css";

const Logo = (props) => {
  return (
    <Link to="/">
      <img className={classes.logo} src={logoImage} alt="A logo of Fat-bros" />
    </Link>
  );
};

export default Logo;
