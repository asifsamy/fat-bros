import classes from "./Carousel.module.css";

const CarouselItem = (props) => {
  return (
    <div
      className={`${
        props.id === props.current
          ? classes["slide"] + " " + classes["active"]
          : classes["slide"]
      }`}
      onMouseEnter={props.stopSlideTimer}
      onMouseOut={props.startSlideTimer}
    >
      {props.id === props.current && (
        <img src={props.slide} alt="Carosel images" className={classes.image} />
      )}
    </div>
  );
};

export default CarouselItem;
