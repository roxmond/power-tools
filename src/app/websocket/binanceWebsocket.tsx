"use client";
//component
import React, { useState, useEffect } from "react";
import { BsGraphUpArrow, BsGraphDownArrow } from "react-icons/bs";
import LoadingData from "../components/ui/loaders/loadingData";
import { GiInjustice } from "react-icons/gi";
import { MdAutoGraph } from "react-icons/md";
import { CgLivePhoto } from "react-icons/cg";
import { FaEthereum } from "react-icons/fa";
import { RiBtcFill } from "react-icons/ri";
import { RiBnbFill, RiXrpFill } from "react-icons/ri";
import { SiSolana } from "react-icons/si";
import Timestamp from "@/app/utils/timestamp/timestamp";
import PercentageCalculator from "@/app/utils/percentageCalculator/percentageCalculator";

interface Props {
  url: string;
  selectedSymbol: string;
}

export interface BinanceData {
  e: string; // Event type
  E: number; // Event time
  s: string; // Symbol
  k: {
    t: number; // Kline start time
    T: number; // Kline close time
    s: string; // Symbol
    i: string; // Interval
    f: number; // First trade ID
    L: number; // Last trade ID
    o: number; // Open price
    c: number; // Close price
    h: number; // High price
    l: number; // Low price
    v: string; // Base asset volume
    n: number; // Number of trades
    x: boolean; // Is this kline closed?
    q: string; // Quote asset volume
    V: string; // Taker buy base asset volume
    Q: string; // Taker buy quote asset volume
    B: string; // Ignore
  };
}

/* const iconMap: Record<string, React.ReactNode> = {
  btcusdt: <RiBtcFill className="mr-2" />,
  ethusdt: <FaEthereum className="mr-2" />,
  bnbusdt: <RiBnbFill className="mr-2" />,
  solusdt: <SiSolana className="mr-2" />,
  xrpusdt: <RiXrpFill className="mr-2" />,
  // Add more icons for other supported symbols
}; */

export default function BinanceWebsocket({ url, selectedSymbol }: Props) {
  const [data, setData] = useState<BinanceData | null>(null);

  useEffect(() => {
    const ws = new WebSocket(url);

    ws.onopen = () => {
      console.log("WebSocket connection opened");
    };

    ws.onmessage = (event) => {
      const parsedData = JSON.parse(event.data) as BinanceData;
      setData(parsedData);
    };

    ws.onclose = () => {
      console.log("WebSocket connection closed");
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    return () => {
      ws.close();
    };
  }, [url]);

  if (!data) {
    return <LoadingData text="Waiting for data..." />;
  }

  function round(num: number): number {
    return Math.round(num * 100) / 100;
  }

  const kline = data.k;
  const symbol = kline.s;
  const interval = kline.i;
  const openPrice = round(kline.o);
  const closePrice = round(kline.c);
  const highestPrice = round(kline.h);
  const lowestPrice = round(kline.l);

  const trades = kline.n;
  const eventTime = data.E;
  const formattedEventTime = Timestamp(eventTime);

  const percentageChange = round(PercentageCalculator(openPrice, closePrice));

  const colorClass =
    percentageChange > 0
      ? "text-green-500"
      : percentageChange < 0
      ? "text-red-500"
      : "text-gray-500";

  return (
    <div className="flex flex-col w-full justify-center items-center ">
      <div className="flex flex-row gap-x-4">
        <div className="badge badge-outline p-4">
          {selectedSymbol === "btcusdt" && <RiBtcFill className="mr-2" />}
          {selectedSymbol === "ethusdt" && <FaEthereum className="mr-2" />}
          {selectedSymbol === "bnbusdt" && <RiBnbFill className="mr-2" />}
          {selectedSymbol === "solusdt" && <SiSolana className="mr-2" />}
          {selectedSymbol === "xrpusdt" && <RiXrpFill className="mr-2" />}{" "}
          {symbol}
        </div>
        <div className="badge badge-outline p-4">{interval}</div>
        <div className="badge badge-outline p-4">{formattedEventTime}</div>
        <div className={`badge badge-outline p-4 ${colorClass}`}>
          {percentageChange.toFixed(2)}%
        </div>
      </div>
      <div className="border border-solid w-[70%] mt-4 border-slate-500"></div>

      <div className="glass flex flex-row items-center justify-center gap-x-4 border border-solid border-slate-400 rounded-sm w-[95%] p-4 mt-4 sm:w-[45%]">
        <BsGraphUpArrow />
        <p>Highest Price: {highestPrice}</p>
        <BsGraphDownArrow />
        <p>Lowest Price: {lowestPrice}</p>
      </div>

      <div className="glass flex flex-row items-center justify-center gap-x-4 border border-solid border-slate-400 rounded-sm w-[95%] p-4 mt-4 sm:w-[45%]">
        <MdAutoGraph />
        <p>Open Price: {openPrice.toFixed(2)}</p>
        <CgLivePhoto />
        <p>
          Current Price:{" "}
          <span className={colorClass}>{closePrice.toFixed(2)}</span>
        </p>
      </div>

      <div className="glass flex flex-row items-center justify-center gap-x-4 border border-solid border-slate-400 rounded-sm w-[95%] p-4 mt-4 sm:w-[45%]">
        <GiInjustice />
        <p>
          Number of trades in the last {interval}: {trades}
        </p>
      </div>
    </div>
  );
}
