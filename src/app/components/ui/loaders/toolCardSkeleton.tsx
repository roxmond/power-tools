export default function ToolCardSkeleton() {
  return (
    <div className="text-slate-100 animate-pulse w-fit flex flex-row justify-between items-start border border-solid border-slate-400 rounded-md cursor-pointer opacity-80 hover:opacity-100">
      <div className="flex flex-row">
        <div className="w-fit h-fit flex items-center justify-center bg-center ">
          <span className="loading loading-spinner loading-sm m-2 size-6"></span>
        </div>
        <div className="flex flex-col glass">
          <div className="text-lg border-b border-solid p-2 w-80 h-11">
            <span className="">Loading card...</span>
          </div>
          <div className="flex flex-col justify-center items-centertext-lg border-solid p-2 w-9 h-[6.3rem]">
            <span className="loading loading-bars loading-sm ml-32"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
