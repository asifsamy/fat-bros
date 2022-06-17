import Facebook from "../../../assets/facebook.png";
import Instagram from "../../../assets/instagram.png";
import Twitter from "../../../assets/twitter.png";
import Youtube from "../../../assets/youtube.png";
import SubFooter from "./SubFooter";
import classes from "./Footer.module.css";
import FooterAd from "./FooterAd";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <SubFooter />
      <FooterAd />
      <div className={classes["footer-tags"]}>
        <a href="!#">
          <img src={Facebook} alt="social media" />
        </a>
        <a href="!#">
          <img src={Instagram} alt="social media" />
        </a>
        <a href="!#">
          <img src={Twitter} alt="social media" />
        </a>
        <a href="!#">
          <img src={Youtube} alt="social media" />
        </a>
        <a className={classes["link-internal"]} href="!#">
          Accessibility Statement
        </a>
        <a className={classes["link-internal"]} href="!#">
          Contact Us
        </a>
        <a className={classes["link-internal"]} href="!#">
          Privacy Policy
        </a>
        <div className={classes["tags-form"]}>
          <input placeholder="Email" />
          <button>Subcribe</button>
        </div>
      </div>
      <p className={classes["copy-right"]}>Copyright Fat Bro's © 2022</p>
    </footer>
  );
};

export default Footer;
