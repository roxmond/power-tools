import { IoChevronBackCircleOutline } from "react-icons/io5";
import Link from "next/link";
interface headerProps {
  title: string;
  target: string;
}
export default function Header({ title, target }: headerProps) {
  return (
    <header className="w-full h-auto flex flex-row justify-between items-center p-4 mb-10 bg-slate-600 sticky drop-shadow-[0px_1px_7px_#e8e8e8] z-10">
      <Link href={target} className="">
        <button className="btn glass">
          <IoChevronBackCircleOutline className="w-6 h-auto" />
        </button>
      </Link>

      <h1 className="text-3xl text-slate-100 font-bold">{title}</h1>
    </header>
  );
}
