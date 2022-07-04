import Logo from "../UI/Logo";
import Navbar from "./Navbar";
import classes from "./Header.module.css";
import OrderButton from "../UI/OrderButton";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Logo />
      </div>
      <div className={classes.elements}>
        <div className={classes["order-button"]}>
          <OrderButton>ORDER PICK UP</OrderButton>
          <OrderButton>ORDER DELIVERY</OrderButton>
        </div>
        <div className={classes["nav-elemnts"]}>
          <Link className={classes["link-element"]} to="/standort">
            <MdLocationPin size="1.5rem" color="red" />
            <div>Find Location</div>
          </Link>
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
