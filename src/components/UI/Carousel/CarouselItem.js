import classes from "./CarouselItem.module.css";

const CarouselItem = ({ slide, stopSlide, startSlide }) => {
  return (
    <div
      className={classes["carousel-item"]}
      onMouseEnter={stopSlide}
      onMouseOut={startSlide}
    >
      <img src={slide} alt="Restuarant slider" />
    </div>
  );
};

export default CarouselItem;
