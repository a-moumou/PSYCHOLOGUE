import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import routes from "./config";
import { Styles } from "../styles/styles";
import NosServices from "../pages/NosServices/NosServices";
import APropos from "../pages/APropos/APropos";
import Tarifs from "../pages/tarifs/Tarifs";
import Contact from "../pages/Contact/Contact";

const Router = () => {
  return (
    <Suspense fallback={null}>
      <Styles />
      <Header />
      <Switch>
        {routes.map((routeItem) => {
          return (
            <Route
              key={routeItem.component}
              path={routeItem.path}
              exact={routeItem.exact}
              component={lazy(() => import(`../pages/${routeItem.component}`))}
            />
          );
        })}
        <Route path="/nos-services" component={NosServices} />
        <Route path="/a-propos" component={APropos} />
        <Route path="/tarifs" component={Tarifs} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </Suspense>
  );
};

export default Router;
