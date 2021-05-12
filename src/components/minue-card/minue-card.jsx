import React from "react";
import "./minue-card.scss";

const MinueCard = ({ title, imageUrl, width, height }) => (
  <div className={`col-${width} g-3`}>
    <div
      className="menu-item d-flex text-center  justify-content-center align-items-center"
      style={{
        height: height,
      }}
    >
      <div
        className="background-img"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: `center`,
          backgroundSize: ` cover`,
        }}
      ></div>
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  </div>
);

export default MinueCard;
