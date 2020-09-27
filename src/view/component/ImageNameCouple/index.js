import React from "react";

import "./index.scss";

export default ({ src, name, style = {}, imgWrapperStyle = {} }) => (
  <div
    className="vertical-flow full-height cross-axis-centered image-name-couple"
    style={style}
  >
    <div
      className="horizontal-flow main-axis-centered cross-axis-centered full-height img-wrapper"
      style={imgWrapperStyle}
    >
      <img src={src} alt={name} />
    </div>
    <div className={"text"}>{name}</div>
  </div>
);
