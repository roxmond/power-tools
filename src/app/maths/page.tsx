"use client";
import { useState } from "react";
import Header from "../components/ui/header";
import LoadingData from "../components/ui/loaders/loadingData";
import RuleOfThree from "../components/mathComponents/ruleOfThree";
import PythagoreanTheorem from "../components/mathComponents/pythagoreanTheorem";
import BgLineEffect from "../components/ui/bgLineEffect/bgLineEffect";

export default function Maths() {
  const [selectedMath, setSelectedMath] = useState<string>("");

  const handleMathChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMath(event.target.value);
  };
  return (
    <>
      <BgLineEffect />
      <Header title="Maths" target="/" />
      <div className="flex flex-col text-slate-300 items-center justify-center sm:flex-col sm:items-center">
        <div>
          <select
            className="select select-bordered w-full max-w-xs mb-4"
            value={selectedMath}
            onChange={handleMathChange}
          >
            <option selected>Select your math type...</option>
            <option>Pythagorean Theorem</option>
            <option>Rule of Three</option>
          </select>
        </div>

        <div className="w-full flex justify-center m-4 sm:w-5/6 ">
          {selectedMath === "Pythagorean Theorem" && <PythagoreanTheorem />}
          {selectedMath === "Rule of Three" && <RuleOfThree />}
          {selectedMath === "" && (
            <LoadingData text="Waiting a math problem to selected" />
          )}
        </div>
      </div>
    </>
  );
}
