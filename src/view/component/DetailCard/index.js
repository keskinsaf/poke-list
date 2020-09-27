import React, { useState } from "react";

import "./index.scss";

import ImageNameCouple from "../ImageNameCouple";

export default ({ src, name, handleClose, children }) => {
  const [imgWrapperStyle] = useState({ height: "100px", width: "140px" });
  return (
    <div className="vertical-flow main-axis-centered detail-card">
      <div className="horizontal-flow full-width header">
        <button className="close-button" onClick={handleClose}>
          X
        </button>
      </div>
      <ImageNameCouple
        src={src}
        name={name}
        imgWrapperStyle={imgWrapperStyle}
      />
      {children}
    </div>
  );
};
