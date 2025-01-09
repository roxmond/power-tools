export default function DashboardHeader() {
  return (
    <header className="flex flex-col justify-center w-full px-4 items-center sm:px-16">
      <div className="flex flex-row justify-center items-center">
        <img src="./logo.png" alt="logo" className="w-10 h-auto m-4" />
        <h1 className="w-full text-2xl">Power Tools</h1>
      </div>
    </header>
  );
}
