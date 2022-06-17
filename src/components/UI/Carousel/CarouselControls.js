import { Fragment } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";

import classes from "./CarouselControls.module.css";

const CarouselControls = ({ prevSlide, nextSlide }) => {
  return (
    <Fragment>
      <MdArrowBackIos
        className={`${classes["carousel-control"]} ${classes.left}`}
        onClick={prevSlide}
      />
      <MdArrowForwardIos
        className={`${classes["carousel-control"]} ${classes.right}`}
        onClick={nextSlide}
      />
    </Fragment>
  );
};

export default CarouselControls;
