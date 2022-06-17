import { useEffect, useRef, useState } from "react";

import CarouselItem from "./CarouselItem";
import classes from "./Carousel.module.css";
import CarouselControls from "./CarouselControls";
import CarouselIndicators from "./CarouselIndicators";

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideInterval = useRef();

  const prev = () => {
    startSlideTimer();
    const index = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
    setCurrentSlide(index);
  };

  const next = () => {
    startSlideTimer();
    const index = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
    setCurrentSlide(index);
  };

  const switchIndex = (index) => {
    startSlideTimer();
    setCurrentSlide(index);
  };

  const startSlideTimer = () => {
    stopSlideTimer();
    slideInterval.current = setInterval(() => {
      setCurrentSlide((currentSlide) =>
        currentSlide < slides.length - 1 ? currentSlide + 1 : 0
      );
    }, 3000);
  };

  const stopSlideTimer = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  useEffect(() => {
    startSlideTimer();

    return () => stopSlideTimer();
  }, []);

  //   console.log(currentSlide);

  return (
    <div className={classes.container}>
      <div className={classes.carousel}>
        <div
          className={classes["carousel-inner"]}
          style={{ transform: `translateX(${-currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <CarouselItem
              slide={slide.img}
              key={index}
              stopSlide={stopSlideTimer}
              startSlide={startSlideTimer}
            />
          ))}
        </div>
        <CarouselIndicators
          slides={slides}
          currentIndex={currentSlide}
          switchIndex={switchIndex}
        />
        <CarouselControls prevSlide={prev} nextSlide={next} />
      </div>
    </div>
  );
};

export default Carousel;
