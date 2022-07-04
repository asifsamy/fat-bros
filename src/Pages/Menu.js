import { Fragment } from "react";
import { Helmet } from "react-helmet";
import AvailableMenu from "../components/Menu/AvailableMenu";
import Section from "../components/UI/Section";

const Menu = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Menu | Fat Bro's</title>
        <meta
          name="description"
          content="die offiziellen Hot Dogs, Falafel, Köfte, Kinder, Deessert aus Hamburg"
        />
      </Helmet>
      {/* <section className="menu">
        <AvailableMenu />
      </section> */}
      <Section>
        <AvailableMenu />
      </Section>
    </Fragment>
  );
};

export default Menu;
