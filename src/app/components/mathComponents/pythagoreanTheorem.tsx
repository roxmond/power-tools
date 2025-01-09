"use client";
import { useState } from "react";

export default function PythagoreanTheorem() {
  const [a, setA] = useState<number | "">();
  const [b, setB] = useState<number | "">();

  // Function to calculate the hypotenuse (x)
  const calculateX = () => {
    if (a && b) {
      return (a ** 2 + b ** 2) ** 0.5;
    } else {
      return null;
    }
  };

  const x = calculateX();

  return (
    <div className="glass w-[90%] h-auto p-8 items-center rounded-md grid grid-cols-2 gap-4">
      <h1 className="text-center text-2xl mb-4 col-span-2">
        Pythagorean Theorem
      </h1>
      <div className="flex flex-col items-center justify-center">
        <p>Side a</p>
        <input
          type="number"
          placeholder="Enter value"
          value={a}
          onChange={(e) => setA(Number(e.target.value))}
          className="input input-bordered w-fit p-2"
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <p>Side b</p>
        <input
          type="number"
          placeholder="Enter value"
          value={b}
          onChange={(e) => setB(Number(e.target.value))}
          className="input input-bordered w-fit p-2"
        />
      </div>
      <div className="flex flex-row items-center justify-center col-span-2">
        <div className="flex flex-col items-center justify-center">
          <p>Hypotenuse (x)</p>
          <p className="text-red-600">
            {x !== null ? x.toFixed(2) : "Enter values for a and b"}
          </p>
        </div>
      </div>
    </div>
  );
}
