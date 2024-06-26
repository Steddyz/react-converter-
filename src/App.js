import "./App.css";
import React, { useEffect, useState } from "react";
import Block from "./components/Block";
import BlockRub from "./components/BlockRub";

function App() {
  const [toCurrency, setToCurrency] = useState("USD");
  const [fromCurrency, setFromCurrency] = useState("RUB");

  const [rates, toRates] = useState({});
  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(1);

  useEffect(() => {
    fetch("https://www.cbr-xml-daily.ru/latest.js")
      .then((response) => response.json())
      .then((data) => {
        toRates(data.rates);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    calculateFromCurrency(fromPrice);
  }, [toCurrency]);

  const calculateFromCurrency = (value) => {
    const price = value / 1;
    const result = price * rates[toCurrency];
    setToPrice(result.toFixed(2));
    setFromPrice(value);
  };

  const calculateToCurrency = (value) => {
    setToPrice(value);
  };

  return (
    <div className="App">
      <BlockRub
        value={fromPrice}
        currency={fromCurrency}
        onChangeValue={calculateFromCurrency}
      />
      <Block
        value={toPrice}
        currency={toCurrency}
        onChangeCurrency={setToCurrency}
        onChangeValue={calculateToCurrency}
      />
    </div>
  );
}

export default App;
