import { Fragment } from "react";
import AvailableMenu from "../Menu/AvailableMenu";
import MenuBar from "../Menu/MenuBar";
import Carousel from "../UI/Slider/Carousel";
import { SliderData } from "../UI/Slider/SliderData";

// import Carousel from "../UI/Carousel/Carousel";
// import { SliderData } from "../UI/Carousel/SliderData";

const Home = (props) => {
  return (
    <Fragment>
      <Carousel slides={SliderData} />
      <MenuBar />
      <div className="home">
        <h1>Get Dirty</h1>
        <div className="border"></div>
      </div>
      <AvailableMenu />
    </Fragment>
  );
};

export default Home;
