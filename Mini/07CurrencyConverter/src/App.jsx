import React, { useState, useEffect } from "react";
import axios from "axios";
import CurrencySelector from "./Components/CurrencySelector";
import InputAmount from "./Components/InputAmount";

const App = () => {
  const [currencies, setCurrencies] = useState([]);
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [isConverted, setIsConverted] = useState(false);

  useEffect(() => {
    axios
      .get(
        "https://v6.exchangerate-api.com/v6/11ec6177deb07b0df43af796/latest/USD"
      )
      .then((response) =>
        setCurrencies([...Object.keys(response.data.conversion_rates)])
      )
      .catch((error) => console.log(error));
      console.log("componenet re-rendered")
  }, [fromCurrency]);

  function onChangeAmount(e) {
    setAmount(e.target.value);
    setIsConverted(false);
  }

  function handleConvert() {
    axios
      .get(
        `https://v6.exchangerate-api.com/v6/11ec6177deb07b0df43af796/latest/${fromCurrency}`
      )
      .then((response) => {
        const rate = response.data.conversion_rates[toCurrency];
        setConvertedAmount((amount * rate).toFixed(2));
        setIsConverted(true);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="bg-slate-200 rounded px-4 py-2 space-y-2 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Currency Converter</h1>

      <div className="inputs space-y-2 flex flex-col items-center justify-center p-2">
        <InputAmount amount={amount} onChangeAmount={onChangeAmount} />
        <CurrencySelector
          label="From"
          currencies={currencies}
          selectedCurrency={fromCurrency}
          onChangeCurrency={setFromCurrency}
        />
        <CurrencySelector
          label="To  "
          currencies={currencies}
          selectedCurrency={toCurrency}
          onChangeCurrency={setToCurrency}
        />
      </div>
      <button
        onClick={handleConvert}
        className="bg-green-400 py-2 px-4 rounded"
      >
        Convert{" "}
      </button>

      {isConverted && (
        <h3>
          {amount} {fromCurrency} = {convertedAmount} {toCurrency}
        </h3>
      )}
    </div>
  );
};

export default App;
