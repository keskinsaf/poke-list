import React from "react";

import "./index.scss";

export default ({ title, list, itemValueGetter = (item) => item, style }) => (
  <div className="title-list-couple" style={style}>
    <div className="title">{title}</div>
    <ul>
      {list.map((item, index) => (
        <li className="list-item" key={index}>
          {itemValueGetter(item)}
        </li>
      ))}
    </ul>
  </div>
);
