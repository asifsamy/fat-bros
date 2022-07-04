import { Fragment } from "react";
import { Helmet } from "react-helmet";
import Section from "../components/UI/Section";
import MapComp from "../components/Location/MapComp";

const Location = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Standorts | Fat Bro's</title>
        <meta
          name="description"
          content="die offiziellen Hot Dogs, Falafel, Köfte aus Hamburg"
        />
      </Helmet>
      <Section>
        <MapComp />
      </Section>
    </Fragment>
  );
};

export default Location;
