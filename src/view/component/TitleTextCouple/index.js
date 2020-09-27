import React from "react";

import "./index.scss";

export default ({ title, text, style }) => (
  <div className="horizontal-flow title-text-couple" style={style}>
    <div className="title">{title}:</div>
    <div className="text">{text}</div>
  </div>
);
