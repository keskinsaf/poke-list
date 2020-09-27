import React from "react";

import "./index.scss";

import ImageNameCouple from "../ImageNameCouple";

export default ({ src, name = "alt" }) => {
  return (
    <div className="vertical-flow cross-axis-centered oval-border card">
      <ImageNameCouple src={src} name={name} />
    </div>
  );
};
