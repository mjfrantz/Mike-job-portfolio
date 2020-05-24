import React from 'react';
import Banner from './component/Banner/Banner';
import About from './component/About';
import mikeData from './component/mikeData';

export const Home = () => (
  <div className="body_wrapper">
    <Banner mikeData={mikeData} bClass="banner_shap" imag="mike.jpeg" textLeft="text-left" />
    <About aClass="about_area" mikeData={mikeData} />
  </div>
)