import { Fragment } from "react";
import { Helmet } from "react-helmet";
import BarComp from "../components/Bar/BarComp";
import Section from "../components/UI/Section";

const Bar = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Bars | Fat Bro's</title>
        <meta
          name="description"
          content="die offiziellen Hot Dogs, Falafel, Köfte aus Hamburg"
        />
      </Helmet>
      <Section>
        <BarComp />
      </Section>
    </Fragment>
  );
};

export default Bar;
