import React from "react";
import "./SwapCard.css";
import SwapBalance from "../SwapBalance/SwapBalance";
import SwapAmount from "../SwapAmount/SwapAmount";

const SwapCard = ({img, name, bal}) => {
  return (
    <div className="CardSwap h-22 p-2 text-xs mb-4 position-relative">
      <SwapBalance
        img={img}
        CoinName={name}
        balance={bal}
      />
      <SwapAmount />
     
    </div>
  );
};

export default SwapCard;
