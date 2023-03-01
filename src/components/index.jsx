import React, { Component } from "react";
import Footer from "./Footer";
import MainContent from "./Main";
import Navigation from "./Navbar";

export default class Komponen extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <MainContent />
        <Footer />
      </div>
    );
  }
}
