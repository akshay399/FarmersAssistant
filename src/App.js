import React, { useRef, useEffect, useState } from "react";
import {
  useLocation,
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import AppRoute from "./utils/AppRoute";
import ScrollReveal from "./utils/ScrollReveal";
import ReactGA from "react-ga";
import News from "./components/pages/News";
import axios from "axios";

// Layouts
import LayoutDefault from "./layouts/LayoutDefault";

// Views
import Home from "./views/Home";
import Footer from "./components/layout/Footer";
import Crop from "./components/pages/Crop";
import Crop_form from "./components/pages/Crop_form";
import Result_crop from "./components/pages/Result_crop";


// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = (page) => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {
  const [news, setNews] = useState([]);
  const childRef = useRef();
  let location = useLocation();

  const fetchNews = async () => {
    const res = await axios.get(
      "https://farmers-assistant-backend.herokuapp.com/news"
    );
    setNews(res.data);
  };

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add("is-loaded");
    childRef.current.init();
    trackPage(page);
    fetchNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const getcropdata = (data)=>{
    console.log('in app.js',data);
  }

  return (
    <>
      <ScrollReveal
        ref={childRef}
        children={() => (
          <Switch>
            <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
            <Route exact path="/news">
              <News news={news} />
            </Route>
           
            <Route exact path="/crop">
              <Crop_form />
            </Route>

           
        <Route exact path="/crop_predict" getcropdata={getcropdata}>
              < Result_crop getcropdata={getcropdata}/>
            </Route>
        

           

          </Switch>
        )}
      />
    </>
  );
};

export default App;
