import React from "react";
import "./Widget.css";

import forty from "../asset/forty.jpg"
import fifty from "../asset/fifty.jpg"
import sale from '../asset/by.jpg'


const Widget = () => {
  

  return (
    <div className="widgets-container">
      <img src={sale} onError={(e) => (e.target.src = "https://via.placeholder.com/1500x500")} alt='banner'/>
      <img src={fifty} onError={(e) => (e.target.src = "https://via.placeholder.com/1500x500")} alt='banner'/>
      <img src={forty} onError={(e) => (e.target.src = "https://via.placeholder.com/1500x500")} alt='banner'/>
    </div>
  );
};

export default Widget;
