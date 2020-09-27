import React from "react";
import "./index.scss";

export default ({
  gridColumnCount = 3,
  gridColumnGap = "1%",
  gridWidth = "100%",
  style = {},
  ...props
}) => (
  <div
    style={{
      ...style,
      "--grid-column-count": gridColumnCount,
      "--grid-column-gap": gridColumnGap,
      "--grid-width": gridWidth,
    }}
    className="full-width responsive-grid"
  >
    {props.children}
  </div>
);
