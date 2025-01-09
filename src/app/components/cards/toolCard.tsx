import Link from "next/link";
import { TiWeatherCloudy } from "react-icons/ti";
import { TbMathSymbols } from "react-icons/tb";
import { BiBitcoin } from "react-icons/bi";
import { RiMovie2Line } from "react-icons/ri";

interface ToolCardProps {
  title: string;
  description: string;
  href: string;
  icon: string;
}

export default function ToolCard({
  title,
  description,
  href,
  icon,
}: ToolCardProps) {
  return (
    <div className="text-slate-100 w-fit flex flex-row justify-between items-start border border-solid border-slate-400 rounded-md cursor-pointer opacity-80 hover:opacity-100">
      <Link href={href} className="flex flex-row">
        <div className="w-fit h-fit flex items-center justify-center bg-center ">
          {icon === "weather" && <TiWeatherCloudy className="m-2 size-6" />}
          {icon === "maths" && <TbMathSymbols className="m-2 size-6" />}
          {icon === "crypto" && <BiBitcoin className="m-2 size-6" />}
          {icon === "movie" && <RiMovie2Line className="m-2 size-6" />}{" "}
        </div>
        <div className="flex flex-col glass">
          <div className="text-lg border-b border-solid p-2">{title}</div>
          <div className="text-lg border-solid p-2  max-w-xs">
            {description}
          </div>
        </div>
      </Link>
    </div>
  );
}
