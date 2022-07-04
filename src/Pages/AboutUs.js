import { Fragment } from "react";
import { Helmet } from "react-helmet";
import AboutUsComp from "../components/AboutUs/AboutUsComp";
import Section from "../components/UI/Section";

const AboutUs = () => {
  const bg = "section-bg";
  return (
    <Fragment>
      <Helmet>
        <title>Über uns | Fat Bro's</title>
        <meta
          name="description"
          content="die offiziellen Hot Dogs, Falafel, Köfte aus Hamburg"
        />
      </Helmet>
      <Section classProps={bg}>
        <AboutUsComp />
      </Section>
    </Fragment>
  );
};

export default AboutUs;
