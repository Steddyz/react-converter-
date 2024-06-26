import React from "react";

export default function BlockRub({ value, onChangeValue }) {
  return (
    <div className="app__wrapper">
      <div className="value">RUB</div>
      <input
        onChange={(element) => onChangeValue(element.target.value)}
        value={value}
        type="number"
        placeholder="1.00"
      ></input>
    </div>
  );
}
