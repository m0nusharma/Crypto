import React from "react";

const SwapBalance = ({img, CoinName, balance}) => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-2 p-1 m-2">
        <img
          src={img}
          alt="Bitcoin"
          className="h-5"
        />
        <p className="text-sm m-0">{CoinName}</p>
        <i className="fa-solid fa-chevron-down cursor-pointer text-xs"></i>
      </div>
      <div className="p-1 flex align-items-center">{balance}</div>
    </div>
  );
};

export default SwapBalance;
