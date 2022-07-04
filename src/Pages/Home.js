import { Helmet } from "react-helmet";
import AvailableMenu from "../components/Menu/AvailableMenu";
import Carousel from "../components/UI/Slider/Carousel";
import { SliderData } from "../DataFiles/SliderData";
import { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Fat Bro's: Die offiziellen Hot Dogs aus Hamburg</title>
        <meta
          name="description"
          content="die offiziellen Hot Dogs, Falafel, Köfte aus Hamburg"
        />
      </Helmet>
      <section>
        <Carousel slides={SliderData} />
        <AvailableMenu />
      </section>
    </Fragment>
  );
};

export default Home;
