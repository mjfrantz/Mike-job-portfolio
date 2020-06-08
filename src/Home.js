import React from 'react';
import NavBar from './component/NavBar/NavBar';
import Banner from './component/Banner/Banner';
import About from './component/About';
import mikeData from './component/mikeData';
import Portfolio from './component/Portfolio/Portfolio';
import Footer from './component/Footer';

export const Home = () => (
  <div className="body_wrapper">
    <NavBar mainlogo="MJF9.png" stickylogo="MJF10.png" />
    <Banner mikeData={mikeData} bClass="banner_shap" imag="mike.jpeg" textLeft="text-left" />
    <About aClass="about_area" mikeData={mikeData} />
    <Portfolio />
    <Footer />
  </div>
)

