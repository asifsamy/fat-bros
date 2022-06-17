import { Fragment } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";

import classes from "./Carousel.module.css";

const CarouselControls = ({ prevSlide, nextSlide }) => {
  return (
    <Fragment>
      <MdArrowBackIos className={classes["left-arrow"]} onClick={prevSlide} />
      <MdArrowForwardIos
        className={classes["right-arrow"]}
        onClick={nextSlide}
      />
    </Fragment>
  );
};

export default CarouselControls;
