import classes from "./OrderButton.module.css";

const OrderButton = (props) => {
  return <button className={classes.button}>{props.children}</button>;
};

export default OrderButton;
