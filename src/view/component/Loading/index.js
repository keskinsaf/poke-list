import React from "react";

import "./index.scss";

export default ({ value }) =>
  value ? (
    <div className="full-width full-height loading">I am loading</div>
  ) : (
    <></>
  );
