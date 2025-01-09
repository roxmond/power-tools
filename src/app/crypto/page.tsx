"use client";

import React, { useState } from "react";
import BinanceWebsocket from "@/app/websocket/binanceWebsocket"; // Adjust the path as needed
import Header from "../components/ui/header";
import BgLineEffect from "../components/ui/bgLineEffect/bgLineEffect";

export default function CryptoPage() {
  const [selectedSymbol, setSelectedSymbol] = useState("btcusdt");
  const [interval, setInterval] = useState("1h");

  const handleSymbolChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSymbol(event.target.value);
  };

  const handleIntervalChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setInterval(event.target.value);
  };

  const socketUrl = `wss://stream.binance.com:9443/ws/${selectedSymbol}@kline_${interval}`;

  return (
    <>
      <BgLineEffect />
      <Header title="Binance WebSocket" target="/" />

      <div className="p-4 flex flex-col justify-center items-center text-slate-300">
        <div className="flex space-x-4 mb-8">
          <div>
            <label htmlFor="symbol-select" className="block mb-2 font-semibold">
              Select Symbol:
            </label>
            <select
              id="symbol-select"
              className="select select-bordered w-full max-w-xs"
              value={selectedSymbol}
              onChange={handleSymbolChange}
            >
              <option value="btcusdt">BTC/USDT</option>
              <option value="ethusdt">ETH/USDT</option>
              <option value="bnbusdt">BNB/USDT</option>
              <option value="solusdt">SOL/USDT</option>
              <option value="xrpusdt">XRP/USDT</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="interval-select"
              className="block mb-2 font-semibold"
            >
              Select Interval:
            </label>
            <select
              id="interval-select"
              className="select select-bordered w-full max-w-xs"
              value={interval}
              onChange={handleIntervalChange}
            >
              <option value="1m">1 Minute</option>
              <option value="5m">5 Minutes</option>
              <option value="15m">15 Minutes</option>
              <option value="1h">1 Hour</option>
              <option value="1d">1 Day</option>
            </select>
          </div>
        </div>

        <BinanceWebsocket url={socketUrl} selectedSymbol={selectedSymbol} />
      </div>
    </>
  );
}
