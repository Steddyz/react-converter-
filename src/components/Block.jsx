import React from "react";

const currencies = ["USD", "EUR", "JPY"];

export default function Block({
  value,
  currency,
  onChangeValue,
  onChangeCurrency,
}) {
  return (
    <>
      <div className="choose__wrapper">
        <ul className="currencies__choose">
          {currencies.map((cur) => (
            <li
              onClick={() => onChangeCurrency(cur)}
              className={currency === cur ? "active" : ""}
            >
              {cur}
            </li>
          ))}

          <li>
            <svg height="15px" viewBox="0 0 50 50" width="15px">
              <rect fill="none" height="50" width="50" />
              <polygon points="47.25,15 45.164,12.914 25,33.078 4.836,12.914 2.75,15 25,37.25 " />
            </svg>
          </li>
        </ul>
        <input
          onChange={(element) => onChangeValue(element.target.value)}
          value={value}
          type="number"
          placeholder="1.00"
        ></input>
      </div>
    </>
  );
}
