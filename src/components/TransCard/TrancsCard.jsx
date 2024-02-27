import React from "react";
import "./TransCard.css";
import SwapCard from "../SwapCard/SwapCard";
import SwapBalance from "../SwapBalance/SwapBalance";
import SwapExchange from "../SwapExchange/SwapExchange";
import ComissonRate from "../comission/ComissonRate";
import Swapbutton from "../SwapButton/Swapbutton";

const TrancsCard = () => {
  return (
    <div className="TransCard p-5 w-75% h-100 ">
      <h4> Swap</h4>
      <p className="text-xs text-gray-400">
        Swap Any Assets simply And securely with <br />
        Coin-Ex Self Development Algorithm
      </p>
      <hr className="text-gray-500" />
     
        <SwapCard
          img="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400"
          name="BTC"
          bal="Bal. 56205.21 BTC"
        />
        <SwapExchange />
        <SwapCard
          img="https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628"
          name="eth"
          bal="Bal.64441.48 ETH"
        />
        <ComissonRate data="Conversion Fess" exchange="1BTC = 01.55502ETH"/>
        <hr className="text-gray-500" />
        <ComissonRate data="Commission" exchange="$2.45"/>
        <ComissonRate data="Total Expected after fees" exchange="$780.5"/>
        <ComissonRate data="The least you'll get at 1.00% Shipping" exchange="$810"/>
        <Swapbutton/>

    </div>
  );
};

export default TrancsCard;
