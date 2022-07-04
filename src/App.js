import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import AboutUs from "./Pages/AboutUs";
import Bar from "./Pages/Bar";
import ContactUs from "./Pages/ContactUs";
import Home from "./Pages/Home";
import Location from "./Pages/Location";
import Menu from "./Pages/Menu";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/menü" exact>
          <Menu />
        </Route>
        <Route path="/über-uns" exact>
          <AboutUs />
        </Route>
        <Route path="/kontakt" exact>
          <ContactUs />
        </Route>
        <Route path="/standort" exact>
          <Location />
        </Route>
        <Route path="/bar" exact>
          <Bar />
        </Route>
        <Route>
          <Redirect to="/home" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
