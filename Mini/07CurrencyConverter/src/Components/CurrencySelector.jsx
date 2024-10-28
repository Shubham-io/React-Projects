import React from "react";

const CurrencySelector = ({
  label,
  currencies,
  selectedCurrency,
  onChangeCurrency,
}) => {
  return (
    <div className=" px-4 py-2 space-x-2">
      <label htmlFor="currency"  className="text-xl">{label}</label>
      <select
        id="currency"
        value={selectedCurrency}
        onChange={(e) => onChangeCurrency(e.target.value)}
      >
        {currencies.map((currency, index) => (
          <option key={index} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencySelector;
