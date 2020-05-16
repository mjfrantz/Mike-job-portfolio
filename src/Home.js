import React from 'react';
import Banner from './component/Banner/Banner';
import mikeData from './component/mikeData';

export const Home = () => (
  <div className="body_wrapper">
    <Banner mikeData={mikeData} bClass="banner_shap" imag="mike.jpg" textLeft="text-left" />
  </div>
)