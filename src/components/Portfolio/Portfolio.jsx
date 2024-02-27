import React from "react";
import HeadingCaption from "../HeadingCaption/HeadingCaption";
import CryptoCard from "../CryptoCard/CryptoCard";

const Portfolio = () => {
  return (
    <div className=" ColorStyle  p-3 text-light mb=3">
      <h6>Total Balance</h6>
      <br />
      <CryptoCard
        img="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
        coinName="Bitcoin"
        coinValue="BTC"
        price="$56205"
        qamount=""
      />

      <CryptoCard
        img="https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628"
        coinName="Ethereum"
        coinValue="ETH"
        price="$3221.48"
        qamount=""
      />

      <CryptoCard
        img="https://assets.coingecko.com/coins/images/325/large/Tether.png?1696501661"
        coinName="Tether"
        coinValue="USDT"
        price="$1.002"
        qamount=""
      />

      <CryptoCard
        img="https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1696501970"
        coinName="bnb"
        coinValue="BNB"
        price="$56205"
        qamount=""
      />

      <CryptoCard
        img="https://assets.coingecko.com/coins/images/4128/large/solana.png?1696504756"
        coinName="Solana"
        coinValue="SOL STETH"
        price="$110.2"
        qamount=""
      />

      <CryptoCard
        img="https://assets.coingecko.com/coins/images/13442/large/steth_logo.png?1696513206"
        coinName="Lido Staked Ether"
        coinValue="XRP"
        price="$3228.09"
        qamount=""
      />
    </div>
  );
};

export default Portfolio;
