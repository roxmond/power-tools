import { Suspense } from "react";
import ToolCardSkeleton from "../loaders/toolCardSkeleton";
import ToolCard from "../../cards/toolCard";
import ToolCardComingSoon from "../../cards/toolCardComingSoon";

export default function DashboardContent() {
  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4">
        <Suspense fallback={<ToolCardSkeleton />}>
          <ToolCard
            title="Weather App"
            description="A mini web app utilizing OpenWeatherMap API to provide weather information."
            icon="weather"
            href="./weather"
          />
        </Suspense>
        <Suspense fallback={<ToolCardSkeleton />}>
          <ToolCard
            title="Maths"
            description="Rule of Three, Pythagorean Theorem and more calculators. Solve math problems with ease."
            icon="maths"
            href="./maths"
          />
        </Suspense>
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <Suspense fallback={<ToolCardSkeleton />}>
          <ToolCard
            title="Crypto Data"
            description="Using the Binance WebSocket to retrieve all the current cryptocurency data and prices you need."
            icon="crypto"
            href="./crypto"
          />
        </Suspense>
        <Suspense fallback={<ToolCardSkeleton />}>
          <ToolCardComingSoon />
        </Suspense>
      </div>
    </>
  );
}
