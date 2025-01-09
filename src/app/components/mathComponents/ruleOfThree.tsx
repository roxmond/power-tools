import { useState } from "react";

export default function RuleOfThree() {
  const [a, setA] = useState<number | "">();
  const [b, setB] = useState<number | "">();
  const [c, setC] = useState<number | "">();

  const calculateX = () => {
    if (a && b && c) {
      return (c / a) * b;
    } else {
      return null;
    }
  };

  const x = calculateX();

  return (
    <div className="glass w-[90%] h-auto p-8 items-center rounded-md">
      <h1 className="text-center text-2xl mb-4">Rule of Three</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col items-center justify-center">
          <p>At</p>
          <input
            type="number"
            placeholder="0"
            value={a}
            onChange={(e) => setA(Number(e.target.value))}
            className="input input-bordered w-fit p-2"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <p>we have</p>
          <input
            type="number"
            placeholder="0"
            value={b}
            onChange={(e) => setB(Number(e.target.value))}
            className="input input-bordered w-fit p-2"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <p>At</p>
          <input
            type="number"
            placeholder="0"
            value={c}
            onChange={(e) => setC(Number(e.target.value))}
            className="input input-bordered w-fit p-2"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <p>how many?</p>
          <p className="text-red-600">X = {x ? x.toFixed(2) : "0"}</p>
        </div>
      </div>
    </div>
  );
}
