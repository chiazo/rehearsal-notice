import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route } from "react-router-dom";

import { Header, Socials, Footer } from "./components";
import App from "./App";
import Contact from "./Contact";

import "./index.css";

const Index = () => (
  <div className="main">
    <HashRouter>
      <Header />
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/contact" component={Contact} />
      </div>
      <Socials />
      <Footer />
    </HashRouter>
  </div>
);

ReactDOM.render(<Index />, document.getElementById("root"));
