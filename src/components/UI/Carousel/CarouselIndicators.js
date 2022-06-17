import classes from "./CarouselIndicators.module.css";

const CarouselIndicators = ({ slides, currentIndex, switchIndex }) => {
  return (
    <div className={classes["carousel-indicators"]}>
      {slides.map((_, index) => (
        <button
          className={`${classes["carousel-indicator-item"]}${
            currentIndex === index ? " " + classes["active"] : ""
          }`}
          onClick={() => switchIndex(index)}
        ></button>
      ))}
    </div>
  );
};

export default CarouselIndicators;
