import React from "react";

const InputAmount = ({ amount, onChangeAmount }) => {

  return (
    <div className="flex flex-col items-center">
      <label htmlFor="amount" className="text-xl">Amount</label>
      <input
        type="text"
        id="amount"
        className="px-2 mt-1 w-full rounded"
        value={amount}
        onChange={onChangeAmount}
      />
    </div>
  );
};

export default InputAmount;
