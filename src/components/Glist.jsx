import React from "react";

const Glist = (props) => {
  const { items, onitemSelect, textProperty, valueProperty } = props;

  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item[valueProperty]}
          onClick={() => onitemSelect(item)}
          className="list-group-item"
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

Glist.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default Glist;
