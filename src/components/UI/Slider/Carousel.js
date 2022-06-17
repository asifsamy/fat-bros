import { useState, useEffect, useRef } from "react";
import { SliderData } from "./SliderData";

import classes from "./Carousel.module.css";
import CarouselControls from "./CarouselControls";
import CarouselItem from "./CarouselItem";
import CarouselIndicators from "./CarouselIndicators";

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  const slideInterval = useRef();

  const startSlideTimer = () => {
    stopSlideTimer();
    slideInterval.currentSlide = setInterval(() => {
      setCurrent((current) => (current < slides.length - 1 ? current + 1 : 0));
    }, 15000);
  };

  const stopSlideTimer = () => {
    if (slideInterval.currentSlide) {
      clearInterval(slideInterval.currentSlide);
    }
  };

  useEffect(() => {
    startSlideTimer();

    return () => stopSlideTimer();
  }, []);

  const length = slides.length;

  const nextSlide = () => {
    startSlideTimer();
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    startSlideTimer();
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const switchIndex = (index) => {
    startSlideTimer();
    setCurrent(index);
  };

  //   console.log(current);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <>
      <section className={classes.slider}>
        <CarouselControls prevSlide={prevSlide} nextSlide={nextSlide} />
        {SliderData.map((slide, index) => (
          <CarouselItem
            key={index}
            id={index}
            slide={slide.img}
            current={current}
            stopSlideTimer={stopSlideTimer}
            startSlideTimer={startSlideTimer}
          />
        ))}
        <CarouselIndicators
          slides={slides}
          currentIndex={current}
          switchIndex={switchIndex}
        />
      </section>
    </>
  );
};

export default Carousel;
